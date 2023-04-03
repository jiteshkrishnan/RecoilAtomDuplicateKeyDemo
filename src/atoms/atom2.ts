import { atom } from "recoil";

/**
 *  Here counter 2 is again an atom with same key "counter" but its going to store a number type

 */
export const counter2 = new atom({
  key: "counter",
  default: 0
});
