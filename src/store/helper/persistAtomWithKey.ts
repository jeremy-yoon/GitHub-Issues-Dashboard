import { recoilPersist } from "recoil-persist";

const persistAtomWithKey = (key: string) => {
  const { persistAtom } = recoilPersist({
    key: key,
    storage: localStorage,
  });
  return persistAtom;
};

export default persistAtomWithKey;
