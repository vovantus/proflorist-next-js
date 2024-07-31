import Bouquet from "@/lib/types/Bouquet";
import Category from "@/lib/types/Category";
import News from "@/lib/types/News";
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

function createCategoryFromDocument(doc: DocumentData): Category {
  return {
    name: doc.name,
    id: doc.id,
    active: doc.active,
    slug: doc.slug,
    description: doc.description ? doc.description : undefined,
  };
}

function createNewsFromDocument(doc: DocumentData): News {
  return {
    id: doc.id,
    header: doc.header,
    text: doc.text,
    date: doc.date.toDate(),
    imageUrl: doc.imageUrl,
    linkTitle: doc.linkTitle ?? null,
    categoryId: doc.categoryId ?? null,
    categorySlug: doc.categorySlug ?? null,
  };
}

export {
  createBouquetFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
};
