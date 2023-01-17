import { atom } from "recoil";
import { persistAtomWithKey } from "../helper";

export const isShowToastAtom = atom({
  key: "isShowToastAtom",
  default: [],
  effects_UNSTABLE: [persistAtomWithKey("isShowToastAtom")],
});
