import axios from "axios";
import { SelectOption } from "../../types/types";

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
      throw new Error("닉네임을 입력해주세요.");
    }
    const response = await axios.patch(
      "http://localhost:3000/api/user-profile",
      {
        email,
        nickname,
        position: position
          ? (position.value as string).toUpperCase()
          : undefined,
        affiliation: affiliation
          ? (affiliation.value as string).toUpperCase()
          : undefined,
        bio: introduction,
        interests: interests.map((interest) =>
          (interest.value as string).toUpperCase()
        ),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
