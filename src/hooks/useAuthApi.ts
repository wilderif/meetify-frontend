import axios from "axios";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

interface ValidationState {
  isValid: boolean;
  message: string;
}

interface UseAuthApiReturn {
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    nickname: string,
    password: string
  ) => Promise<void>;
  deleteUser: (email: string) => Promise<void>;
  validation: Record<string, ValidationState>;
}

const useAuthApi = (): UseAuthApiReturn => {
  const [validation, setValidation] = useState<Record<string, ValidationState>>(
    {
      email: { isValid: true, message: "" },
      password: { isValid: true, message: "" },
      nickname: { isValid: true, message: "" },
    }
  );

  // Zustand 훅을 사용하여 isLogin 상태를 업데이트하는 메서드 가져오기
  const setIsLogin = useAuthStore((state) => state.setIsLogin);

  const login = async (email: string, password: string) => {
    try {
      // 로그인 API 호출
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("로그인 성공:", response.data);
      setIsLogin(true); // 로그인 성공 시 isLogin 상태 업데이트
    } catch (error) {
      console.error("로그인 실패:", error);
      // 로그인 실패 시 유효성 검사 상태 업데이트
      setValidation((prev) => ({
        ...prev,
        email: {
          isValid: false,
          message: "로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.",
        },
      }));
      throw error;
    }
  };

  const register = async (
    email: string,
    nickname: string,
    password: string
  ) => {
    try {
      // 회원가입 API 호출
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email,
          nickname,
          password,
        }
      );
      console.log("회원가입 성공:", response.data);
    } catch (error) {
      console.error("회원가입 실패:", error);
      // 회원가입 실패 시 유효성 검사 상태 업데이트
      setValidation((prev) => ({
        ...prev,
        email: {
          isValid: false,
          message: "회원가입 실패: 이메일 또는 닉네임이 이미 사용 중입니다.",
        },
      }));
      throw error;
    }
  };

  const deleteUser = async (email: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/auth/${email}`
      );
      console.log("회원탈퇴 성공:", response.data);
    } catch (error) {
      console.error("회원탈퇴 실패:", error);
      throw error;
    }
  };

  return { login, register, deleteUser, validation };
};

export default useAuthApi;
