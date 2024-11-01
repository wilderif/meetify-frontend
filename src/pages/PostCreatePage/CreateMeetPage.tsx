import PostFormMeet from "../../components/layout/PostFormMeet/PostFormMeet";
import { PostFormMeetData } from "../../types/Post";

const CreateMeetPage: React.FC = () => {
  const handleSubmit = (data: PostFormMeetData) => {
    console.log("Meet 데이터 제출:", data);
  };

  const handleCancel = () => {
    console.log("작성 취소");
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
