import axios from "axios";
import { PostDetailProps } from "../../types/Post";

export const getPostById = async (
  postId: string
): Promise<PostDetailProps["postData"]> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/post-detail/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error("게시글 데이터를 가져오는데 실패했습니다:", error);
    throw new Error("게시글 데이터를 가져오는데 실패했습니다.");
  }
};
