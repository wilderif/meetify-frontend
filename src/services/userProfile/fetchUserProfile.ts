import axios from "axios";

export const fetchUserProfile = async (email: string) => {
  try {
    const response = await axios.get("http://localhost:3000/api/user-profile", {
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
