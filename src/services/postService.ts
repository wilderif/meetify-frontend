import axios from "axios";
import { PostListReqParams, PostListResParams } from "../types/PostList";

// TODO baseUrl 전역으로 빼기
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getPostList = async (params: PostListReqParams) => {
  return axios.post<{ postList: PostListResParams[]; totalPage: number }>(
    `${API_BASE_URL}/postList`,
    params
  );
};
