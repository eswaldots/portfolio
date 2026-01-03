import { create } from "zustand";

interface UIState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: true, // Estado inicial
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
