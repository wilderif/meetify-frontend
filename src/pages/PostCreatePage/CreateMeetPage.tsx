import { useNavigate } from "react-router-dom";
import PostFormMeet from "../../components/layout/PostFormMeet/PostFormMeet";
import { PostFormMeetData } from "../../types/Post";
import { createMeetPost } from "../../services/postDetail/createPost";
const CreateMeetPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: PostFormMeetData) => {
    console.log("전송하는 데이터 확인:", data.affiliation, data.availableTime);
    try {
      const result = await createMeetPost(data);
      console.log("게시글 생성 성공:", result); // 생성된 게시글 정보 확인
      navigate(`/post/${result.id}`); // 생성된 게시글 상세 페이지로 이동
    } catch (error) {
      console.error("게시글 작성 오류:", error);
      alert("게시글 작성에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <PostFormMeet
      title="본인"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default CreateMeetPage;
