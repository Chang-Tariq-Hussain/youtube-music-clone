// src/store/sidebarStore.js
import { create } from 'zustand';

export interface SidebarState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: true, 

  openSidebar: () => set({ isSidebarOpen: true }),

  closeSidebar: () => set({ isSidebarOpen: false }),

  toggleSidebar: () => set((state: SidebarState) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useSidebarStore;