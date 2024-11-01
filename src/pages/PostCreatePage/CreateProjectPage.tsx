import PostForm from "../../components/layout/PostForm/PostForm";
import { PostFormData } from "../../types/Post";
const CreateProjectPage: React.FC = () => {
  const handleSubmit = (data: PostFormData) => {
    console.log("프로젝트 데이터 제출:", data);
  };

  const handleCancel = () => {
    console.log("작성 취소");
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
