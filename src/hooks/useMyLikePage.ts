import { useState, useEffect } from "react";
import {
  getLikePostList,
  addLikePostList,
  removeLikePostList,
} from "../services/postService";
import { PostListReqParams, PostListResParams } from "../types/PostList";
import useAuthStore from "./../store/useAuthStore";

interface UseMyLikePageReturn {
  postList: PostListResParams[] | null;
  currentPage: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
  handleLikeAdd: (postId: string) => void;
  handleLikeRemove: (postId: string) => void;
}

// TODO 전역으로 변경
// 포스트 최대 표시 개수 정의
const MAX_POST_DISPLAY = 12;

const useMyLikePage = (isLikePage: boolean): UseMyLikePageReturn => {
  const { isLogin, email } = useAuthStore();
  const [postList, setPostList] = useState<PostListResParams[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    if (!isLikePage) return; // isLikePage가 true일 때만 관심글을 조회

    const fetchPostList = async () => {
      const params: PostListReqParams = {
        page: currentPage,
        limit: MAX_POST_DISPLAY,
      };
      // 로그인한 사용자 아이디
      if (isLogin && email) {
        params.loginId = email;
      }

      try {
        const response = await getLikePostList(params);
        setTotalPage(response.data.totalPage);
        setPostList(response.data.postList);
      } catch (error) {
        console.error("API 요청 중 에러 발생 :: ", error);
      }
    };

    fetchPostList();
  }, [isLikePage, currentPage, isLogin, email]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLikeAdd = async (id: string) => {
    const params: PostListReqParams = {
      postId: id,
    };
    // 로그인한 사용자 아이디
    if (isLogin && email) {
      params.loginId = email;
    }
    try {
      await addLikePostList(params);
    } catch (error) {
      console.error("API 요청 중 에러 발생 :: ", error);
    }
  };

  const handleLikeRemove = async (id: string) => {
    const params: PostListReqParams = {
      postId: id,
    };
    // 로그인한 사용자 아이디
    if (isLogin && email) {
      params.loginId = email;
    }
    try {
      await removeLikePostList(params);
    } catch (error) {
      console.error("API 요청 중 에러 발생 :: ", error);
    }
  };

  return {
    postList,
    currentPage,
    totalPage,
    handlePageChange,
    handleLikeAdd,
    handleLikeRemove,
  };
};

export default useMyLikePage;
