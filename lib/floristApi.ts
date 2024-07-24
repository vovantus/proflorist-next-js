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

interface BouquetsData {
  bouquetList: Bouquet[];
  lastBouquet: QueryDocumentSnapshot<DocumentData, DocumentData> | "";
}

interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchBouquetsByCategory: (
    floristName: string,
    cursorDoc?: QueryDocumentSnapshot<DocumentData, DocumentData>,
    categoryId?: Category["id"]
  ) => Promise<BouquetsData>;
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

  fetchBouquetsByCategory: async (floristName, cursorDoc, categoryId) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    let bouquetsCol = query(collection(floristDoc, "bouquets"));
    if (categoryId) {
      bouquetsCol = query(
        bouquetsCol,
        where("categories", "array-contains", categoryId)
      );
    }

    bouquetsCol = query(bouquetsCol, orderBy("name", "desc"));

    if (cursorDoc) bouquetsCol = query(bouquetsCol, startAfter(cursorDoc));

    bouquetsCol = query(bouquetsCol, limit(15));

    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );

    const lastBouquet =
      bouquetsSnapshot.docs.length > 0
        ? bouquetsSnapshot.docs[bouquetsSnapshot.docs.length - 1]
        : "";

    return { bouquetList, lastBouquet };
  },
};

export default floristApi;
