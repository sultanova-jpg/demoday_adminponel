import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useDarkMode = create(
    persist(
        (set) => ({
  isDark: false,
  changeMode: () => set((state) => ({ isDark: !state.isDark})),
}),{name: "darkMode"}),

);

export default useDarkMode