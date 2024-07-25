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
import { createBouquetFromDocument } from "@/utils/dataTransforms";



interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchBouquetsByCategory: (
    floristName: string,
    listLength: number,
    cursorBouquetId?: string,
    categoryId?: Category["id"]
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

  fetchBouquetsByCategory: async (
    floristName,
    listLength,
    cursorBouquetId,
    categoryId
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
      limit(listLength),
    ].filter(Boolean) as any;

    const bouquetsSnapshot = await getDocs(query(bouquetsCol, ...queries));

    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );

    return bouquetList;
  },
};

export default floristApi;
