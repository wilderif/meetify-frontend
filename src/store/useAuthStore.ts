import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  email: string;
  nickname: string;
  isLogin: boolean;
  validation: Record<string, { isValid: boolean; message: string }>;

  // Actions
  login: (email: string, password: string) => void;
  register: (email: string, nickname: string, password: string) => void;
  logout: () => void;
  setValidation: (
    validation: Record<string, { isValid: boolean; message: string }>
  ) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: "",
      nickname: "",
      isLogin: false,
      validation: {
        email: { isValid: true, message: "" },
        password: { isValid: true, message: "" },
        nickname: { isValid: true, message: "" },
      },

      login: (email: string, _password: string) =>
        set((state) => ({
          ...state,
          email,
          isLogin: true,
        })),

      register: (email: string, nickname: string, _password: string) =>
        set((state) => ({
          ...state,
          email,
          nickname,
          isLogin: true,
        })),

      logout: () =>
        set(() => ({
          email: "",
          nickname: "",
          isLogin: false,
        })),

      setValidation: (validation) => set(() => ({ validation })),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        email: state.email,
        nickname: state.nickname,
        isLogin: state.isLogin,
      }),
    }
  )
);

export default useAuthStore;
