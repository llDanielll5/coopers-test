import { atom } from "recoil";

export const Authentication = atom({
  key: "Authentication",
  default: {
    isAuth: false,
  },
});
