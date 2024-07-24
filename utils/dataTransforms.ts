import Bouquet from "@/lib/types/Bouquet";
import { DocumentData } from "firebase/firestore/lite";

function createBouquetFromDocument(doc: DocumentData): Bouquet {
  return {
    name: doc.name,
    description: doc.description,
    price: doc.price,
    images: doc.images,
    availability: doc.availability ? doc.availability : false,
    id: doc.id,
  };
}

export { createBouquetFromDocument };
