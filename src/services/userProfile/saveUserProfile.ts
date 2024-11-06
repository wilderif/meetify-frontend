import axios from "axios";
import { SelectOption } from "../../types/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VITE_API_URL = import.meta.env.VITE_API_URL;

// 타입 정의 추가
export const saveUserProfile = async (
  email: string,
  nickname: string,
  position: SelectOption,
  affiliation: SelectOption,
  introduction: string,
  interests: SelectOption[]
) => {
  try {
    if (!nickname) {
      toast.error("닉네임을 입력해주세요.", { autoClose: 2000 });
    }
    const response = await axios.patch(`${VITE_API_URL}/user-profile`, {
      email,
      nickname,
      position: position ? (position.value as string).toUpperCase() : undefined,
      affiliation: affiliation
        ? (affiliation.value as string).toUpperCase()
        : undefined,
      bio: introduction,
      interests: interests.map((interest) =>
        (interest.value as string).toUpperCase()
      ),
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
