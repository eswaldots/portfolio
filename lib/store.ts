import { create } from "zustand"

export type Background = "white" | "dark"

interface BackgroundStore {
  background: Background
  actions: {
    setBackground: (option: Background) => void
  }
}

export const useBackgroundStore = create<BackgroundStore>((set) => ({
  background: "dark",
  actions: {
    setBackground: (option: Background) => {
      set({ background: option })
    }
  }
}))


