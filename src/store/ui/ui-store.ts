import { create } from "zustand";

interface Store {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

const useUIStore = create<Store>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

export default useUIStore;
