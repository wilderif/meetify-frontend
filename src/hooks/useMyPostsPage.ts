import { useState, useEffect } from "react";
import { getMyPostList } from "../services/postService";
import { PostListReqParams, PostListResParams } from "../types/PostList";
import useAuthStore from "./../store/useAuthStore";

interface UseMyPostsReturn {
  postList: PostListResParams[] | null;
  currentPage: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}

// TODO 전역으로 변경
// 포스트 최대 표시 개수 정의
const MAX_POST_DISPLAY = 12;

const useMyPostsPage = (): UseMyPostsReturn => {
  const { isLogin, email } = useAuthStore();
  const [postList, setPostList] = useState<PostListResParams[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
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
        const response = await getMyPostList(params);
        setTotalPage(response.data.totalPage);
        setPostList(response.data.postList);
      } catch (error) {
        console.error("API 요청 중 에러 발생 :: ", error);
      }
    };

    fetchPostList();
  }, [currentPage, isLogin, email]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return { postList, currentPage, totalPage, handlePageChange };
};

export default useMyPostsPage;
