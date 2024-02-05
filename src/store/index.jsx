import { create } from "zustand";

const useData = create((set) => ({
  products: [],
  nextUrl: "",
  previousUrl: "",
  getData: async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      set(() => ({ products: data.results }));
      set(() => ({ nextUrl: data.next }));
      set(() => ({ previousUrl: data.previous }));
    } catch (err) {
      console.log(err.message);
    }
  },
  getNextData: async () => {
    try {
      const response = await fetch(useData.getState().nextUrl);
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      set(() => ({ products: data.results }));
      set(() => ({ nextUrl: data.next }));
      set(() => ({ previousUrl: data.previous }));
    } catch (err) {
      console.log(err.message);
    }
  },
  getPreviousData: async () => {
    try {
      const response = await fetch(useData.getState().previousUrl);
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const data = await response.json();
      set(() => ({ products: data.results }));
      set(() => ({ nextUrl: data.next }));
      set(() => ({ previousUrl: data.previous }));
    } catch (err) {
      console.log(err.message);
    }
  },
}));

export default useData;
