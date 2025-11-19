// src/store/sidebarStore.js
import { create } from 'zustand';

export interface SidebarState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: typeof window !== "undefined" && window.innerWidth >= 1024, 

  openSidebar: () => set({ isSidebarOpen: true }),

  closeSidebar: () => set({ isSidebarOpen: false }),

  toggleSidebar: () => set((state: SidebarState) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

if (typeof window !== "undefined") {
  const handleResize = () => {
    useSidebarStore.setState({ isSidebarOpen: window.innerWidth >= 1024 });
  };

  window.addEventListener("resize", handleResize);
  // Cleanup on unmount (Zustand doesn't do this automatically in this pattern)
  // Alternatively, use useEffect in component (shown below)
}

export default useSidebarStore;