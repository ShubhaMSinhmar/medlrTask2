import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
  
export const Hello = atom({
    key: "Hello",
    default:false
})


export const Atomis = atom({
    key: "Atomis",
    default:0,
    effects:[localStorageEffect("Atomis")]
})

export const getPosts = atom({
    key: "getPosts",
    default:0
})