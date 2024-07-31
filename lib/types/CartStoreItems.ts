import Bouquet from "./Bouquet";

export default interface CartStoreItems {
  [key: Bouquet["id"]]: number;
}
