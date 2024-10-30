import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  nickname: string;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, nickname: string, password: string) => void;
  logout: () => void;
  validation: Record<string, { isValid: boolean; message: string }>; // 유효성 검사 상태 추가
  setValidation: (
    validation: Record<string, { isValid: boolean; message: string }>
  ) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  nickname: "",
  isLoggedIn: false,
  validation: {
    email: { isValid: true, message: "" },
    password: { isValid: true, message: "" },
    nickname: { isValid: true, message: "" },
  },
  login: (email: string, password: string) =>
    set((state) => ({
      ...state,
      email,
      password,
      isLoggedIn: true,
    })),
  register: (email: string, nickname: string, password: string) =>
    set((state) => ({
      ...state,
      email,
      nickname,
      password,
      isLoggedIn: true, // 회원가입 시 자동 로그인 처리
    })),
  logout: () =>
    set(() => ({ email: "", password: "", nickname: "", isLoggedIn: false })),
  setValidation: (validation) => set(() => ({ validation })),
}));

export default useAuthStore;
