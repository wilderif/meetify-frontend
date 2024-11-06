import PostForm from "../../components/layout/PostForm/PostForm";
import { PostFormData } from "../../types/Post";
import { createStudyPost } from "../../services/postDetail/createPost";
import { useNavigate } from "react-router-dom";

const CreateStudyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: PostFormData) => {
    try {
      const result = await createStudyPost(data);
      console.log("게시글 생성 성공:", result); // 생성된 게시글 정보 확인
      navigate(`/post/${result.id}`); // 생성된 게시글 상세 페이지로 이동
    } catch (error) {
      console.error("게시글 작성 오류:", error);
      alert("게시글 작성에 실패했습니다.");
    }
  };

  // 취소 버튼 클릭 시 이전 페이지로 이동
  const handleCancel = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <PostForm title="스터디" onSubmit={handleSubmit} onCancel={handleCancel} />
  );
};

export default CreateStudyPage;
