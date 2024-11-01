import PostForm from "../../components/layout/PostForm/PostForm";
import { PostFormData } from "../../types/Post";
const CreateStudyPage: React.FC = () => {
  const handleSubmit = (data: PostFormData) => {
    console.log("스터디 데이터 제출:", data);
  };

  const handleCancel = () => {
    console.log("작성 취소");
  };

  return (
    <PostForm title="스터디" onSubmit={handleSubmit} onCancel={handleCancel} />
  );
};

export default CreateStudyPage;
