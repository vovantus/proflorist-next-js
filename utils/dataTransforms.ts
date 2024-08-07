import About from "@/lib/types/About";
import Bouquet from "@/lib/types/Bouquet";
import Category from "@/lib/types/Category";
import Contacts from "@/lib/types/Contacts";
import Delivery from "@/lib/types/Delivery";
import DeliveryOptions from "@/lib/types/DeliveryOptions";
import Florist from "@/lib/types/Florist";
import News from "@/lib/types/News";
import Social from "@/lib/types/Social";
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

function createAboutFromDocument(doc: DocumentData): About {
  return {
    text: doc.text,
    header: doc.header,
    image: doc.image,
  };
}

function createSocialFromDoc(doc: DocumentData): Social {
  return {
    facebook: doc.facebook ?? null,
    instagram: doc.instagram ?? null,
    phone: doc.phone ?? null,
    twitter: doc.twitter ?? null,
    whatsapp: doc.whatsapp ?? null,
  };
}

function createContactsFromDocument(doc: DocumentData): Contacts {
  const contacts: Contacts = {
    text: doc.text,
  };

  if (doc.contacts) {
    contacts.contacts = createSocialFromDoc(doc.contacts);
  }

  return contacts;
}

function createDeliveryOptionsFromDoc(doc: DocumentData): DeliveryOptions {
  return {
    courier: doc.courier ?? null,
    event: doc.event ?? null,
    pickup: doc.pickup ?? null,
  };
}

function createDeliveryInfoFromDoc(doc: DocumentData): Delivery {
  const delivery: Delivery = {
    text: doc.text,
  };

  if (doc.deliveryOptions) {
    delivery.deliveryOptions = createDeliveryOptionsFromDoc(
      doc.deliveryOptions
    );
  }

  return delivery;
}

function createFloristFromDoc(doc: DocumentData): Florist {
  return {
    name: doc.name,
    theme: doc.theme ?? null,
  };
}

export {
  createBouquetFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
  createAboutFromDocument,
  createSocialFromDoc,
  createContactsFromDocument,
  createDeliveryOptionsFromDoc,
  createDeliveryInfoFromDoc,
  createFloristFromDoc,
};
