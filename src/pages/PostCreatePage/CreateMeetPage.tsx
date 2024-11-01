import { useNavigate } from "react-router-dom";
import PostFormMeet from "../../components/layout/PostFormMeet/PostFormMeet";
import { PostFormMeetData } from "../../types/Post";

const CreateMeetPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: PostFormMeetData) => {
    console.log("Meet 데이터 제출:", data);
  };

  const handleCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <PostFormMeet
      title="Meet"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default CreateMeetPage;
