import { atom } from "recoil";
import { persistAtomWithKey } from "../helper";

export const savedReposAtom = atom({
  key: "savedReposAtom",
  default: [],
  effects_UNSTABLE: [persistAtomWithKey("savedReposAtom")],
});
