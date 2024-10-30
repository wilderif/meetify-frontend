import { create } from "zustand";

/** Tab state control */
interface TabStore {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export const useTabStore = create<TabStore>((set) => ({
  selectedTab: "ALL",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
