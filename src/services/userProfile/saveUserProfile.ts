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
    const response = await axios.patch(
      "http://localhost:3000/api/user-profile",
      {
        email,
        nickname,
        position: position.label,
        affiliation: affiliation.label,
        introduction,
        interests: interests.map((interest) => interest.label),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
