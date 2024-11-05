import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const fetchUserProfile = async (email: string) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/user-profile`, {
      params: {
        email: email,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
