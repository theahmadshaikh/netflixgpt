import { create } from "zustand";
import type { User } from "firebase/auth";

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null})
}));

// Export reusable selectors
export const useAuthUser = () => useAuthStore((state) => state.user);
export const useSetAuthUser = () => useAuthStore((state) => state.setUser);
export const useRemoveAuthUser = () => useAuthStore((state) => state.removeUser);