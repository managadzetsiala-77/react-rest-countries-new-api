import { create } from "zustand"

export const useThemeStore = create((set) =>{
    return{
        isDark: false,
        toggle: () => set((state) =>({isDark: !state.isDark}))
    }
})