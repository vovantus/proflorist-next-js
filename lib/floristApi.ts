import {
  getDoc,
  doc,
  DocumentReference,
  DocumentData,
  QueryDocumentSnapshot,
  query,
  collection,
  where,
  limit,
  getDocs,
  orderBy,
  startAfter,
} from "firebase/firestore";
import api from "./firebaseInstance";
import Bouquet from "./types/Bouquet";
import Category from "./types/Category";
import {
  createBouquetFromDocument,
  createCategoryFromDocument,
} from "@/utils/dataTransforms";
import { ITEMS_PER_PAGE } from "@/utils/config";

type FetchCategoryInfo = {
  (floristName: string, categorySlug: Category["slug"]): Promise<Category>;
  (floristName: string, categoryId: Category["id"]): Promise<Category>;
  (
    floristName: string,
    categorySlug?: Category["slug"],
    categoryId?: Category["id"]
  ): Promise<Category>;
};

interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchCategoryInfo: FetchCategoryInfo;

  fetchBouquetsByCategory: (
    floristName: string,
    cursorBouquetId?: string,
    categoryId?: Category["slug"],
    listLength?: number
  ) => Promise<[Bouquet[], boolean]>;

  fetchCategories: (floristName: string) => Promise<Category[]>;

  fetchBouquetsById: (
    floristName: string,
    bouquetIds: Bouquet["id"][]
  ) => Promise<Bouquet[]>;
}

const floristApi: Api = {
  fetchFlorist: async (floristName) => {
    const floristDoc = doc(api.provider().db, "florists", floristName);
    return floristDoc;
  },

  fetchFloristInfo: async (floristName) => {
    const floristRef = await floristApi.fetchFlorist(floristName);
    const floristSnap = await getDoc(floristRef);

    if (floristSnap.exists()) {
      const floristInfo = floristSnap.data();
      return floristInfo;
    } else {
      throw new Error("florist not found");
    }
  },

  fetchCategoryInfo: async (floristName, categorySlug?, categoryId?) => {
    if (!categorySlug && !categoryId) {
      throw new Error("Either categorySlug or categoryId must be specified.");
    }
    const floristDoc = await floristApi.fetchFlorist(floristName);

    if (categoryId) {
      const categorySnap = doc(
        api.provider().db,
        `florists/${floristName}/categories/${categoryId}`
      );
      const categoryDoc = await getDoc(categorySnap);
      return createCategoryFromDocument({
        ...categoryDoc.data(),
        id: categoryDoc.id,
      });
    } else {
      const categoriesCol = query(
        collection(floristDoc, "categories"),
        where("slug", "==", categorySlug)
      );
      const categoriesDocs = await getDocs(categoriesCol);
      if (categoriesDocs.docs.length > 0) {
        return createCategoryFromDocument({
          ...categoriesDocs.docs[0].data(),
          id: categoriesDocs.docs[0].id,
        });
      }
    }

    throw new Error("Category not found");
  },

  fetchBouquetsByCategory: async (
    floristName,
    cursorBouquetId,
    categoryId,
    listLength = ITEMS_PER_PAGE
  ) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);

    let bouquetsCol = query(collection(floristDoc, "bouquets"));

    const cursorDoc =
      cursorBouquetId &&
      doc(collection(floristDoc, "bouquets"), cursorBouquetId);
    const cursorDocSnap = cursorDoc && (await getDoc(cursorDoc));

    const queries = [
      categoryId && where("categories", "array-contains", categoryId),
      orderBy("name", "desc"),
      cursorDocSnap && startAfter(cursorDocSnap),
      limit(listLength + 1),
    ].filter(Boolean) as any;

    const bouquetsSnapshot = await getDocs(query(bouquetsCol, ...queries));
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );

    const hasMore = bouquetsSnapshot.size > listLength;

    return [bouquetList.slice(0, listLength), hasMore];
  },

  fetchCategories: async (floristName) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const categoriesCol = collection(floristDoc, "categories");
    const categoriesSnapshot = await getDocs(categoriesCol);
    const categoriestList = categoriesSnapshot.docs.map((doc) =>
      createCategoryFromDocument({ ...doc.data(), id: doc.id })
    );
    return categoriestList;
  },

  fetchBouquetsById: async (floristName, bouquetIds) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const bouquetsCol = query(
      collection(floristDoc, "bouquets"),
      where("__name__", "in", bouquetIds)
    );
    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );
    return bouquetList;
  },
};

export default floristApi;
