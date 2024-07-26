import Bouquet from "./Bouquet";

export default interface CartItems {
  [key: Bouquet["id"]]: number;
}
