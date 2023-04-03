import { atom } from "recoil";

/**
 * Here counter 1 is an atom with key "counter" but its going to store a string type
 */
export const counter1 = new atom({
  key: "counter",
  default: "0"
});
