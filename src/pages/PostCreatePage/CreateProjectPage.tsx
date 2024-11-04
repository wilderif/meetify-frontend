import { useNavigate } from "react-router-dom";
import PostForm from "../../components/layout/PostForm/PostForm";
import { PostFormData } from "../../types/Post";
const CreateProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (data: PostFormData) => {
    console.log("프로젝트 데이터 제출:", data);
  };

  // 취소 버튼 클릭 시 이전 페이지로 이동
  const handleCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <PostForm
      title="프로젝트"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default CreateProjectPage;
