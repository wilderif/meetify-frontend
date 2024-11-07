import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import axios from "axios";
import Button from "../../common/button/Button";
import {
  PostFormContainer,
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  Content,
} from "./PostDetailMeet.styles";
import ReadInput from "../../common/ReadInput/ReadInput";
import ReadTitle from "../../common/ReadTitle/ReadTitle";
import handIcon from "../../../assets/post-image/hand.svg";
// import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import useAuthStore from "../../../store/useAuthStore";
import { SERVER_URL } from "../../../constants/Chat";
import useChatStore from "../../../store/useChatStore";
import { getProfileImagePath } from "../../../utils/getProfileImagePath";

interface MeetDetailProps {
  postData: {
    id: string;
    title: string;
    content: string;
    interests: string[];
    position: string[];
    participation_method: string;
    affiliation?: string; // 소속 (e.g., 학생, 직장인 등)
    available_time?: string; // 참여 가능 시간대
    created_at: string;
    user_profile: {
      nickname: string;
      email: string;
      profile_image_index: number;
    };
  };
  onEdit: () => void;
  onDelete: () => void;
}
const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>?/gm, ""); // 정규 표현식을 사용하여 HTML 태그 제거
};

const MeetDetail: React.FC<MeetDetailProps> = ({
  postData,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();
  const formattedDate = dayjs(postData.created_at).format("YYYY-MM-DD");
  const currentUserEmail = useAuthStore((state) => state.email);
  const addChatRoom = useChatStore((state) => state.addChatRoom);
  const profileImageIndex = postData.user_profile.profile_image_index;
  const postProfileImage = getProfileImagePath(profileImageIndex);

  // 문의하기 클릭 시 /chats로 이동
  const handleInquiry = async () => {
    const userId = currentUserEmail;
    const targetId = postData.user_profile.email;
    const user_list = [userId, targetId];

    if (userId !== targetId) {
      try {
        // Axios를 사용하여 API 호출
        const response = await axios.post(`${SERVER_URL}/room/exists`, {
          user_list, // userList를 request body에 포함
        });

        // 응답값이 true일 때만 addChatRoom 호출
        if (!response.data.exists) {
          addChatRoom(userId, {
            name: `${postData.user_profile.nickname}`, // 타겟 닉네임
            otherUserId: targetId, // 타겟 아이디
          });
        } else {
          console.log("이미 존재하는 채팅방입니다.");
        }

        console.log(response);
      } catch (error) {
        console.error("채팅방 확인 중 오류 발생:", error);
      }
      navigate("/chats");
    }
  };

  // 공유하기 클릭 시 주소 복사 및 toast 메시지 표시
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success("주소가 복사되었습니다.");
    });
  };

  // 삭제 버튼 클릭 시 알림 표시
  const handleDelete = () => {
    onDelete(); // 실제 삭제 로직 호출
    toast.success("삭제되었습니다.");
  };

  return (
    <PostFormContainer>
      <Section>
        <ReadTitle
          text={postData.title}
          iconSrc={handIcon}
          author={postData.user_profile.nickname}
          authorImageSrc={postProfileImage}
          createdAt={formattedDate}
        />
        <Row>
          <FormColumn>
            <ReadInput
              label="선호 진행 방식"
              value={postData.participation_method}
              variant="primary"
            />
          </FormColumn>
          <FormColumn>
            <ReadInput
              label="관심 분야"
              value={postData.interests.join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.affiliation && (
            <FormColumn>
              <ReadInput
                label="소속"
                value={postData.affiliation}
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="직무"
              value={postData.position.join(", ")}
              variant="primary"
            />
          </FormColumn>

          {postData.available_time && (
            <FormColumn>
              <ReadInput
                label="참여 가능 시간(주)"
                value={postData.available_time}
                variant="primary"
              />
            </FormColumn>
          )}
        </Row>
      </Section>
      <ButtonWrapper>
        <Button
          buttonType="fill"
          buttonSize="medium"
          label="문의하기"
          onClick={handleInquiry} // /chats 페이지로 이동
        />
        <Button
          buttonType="outline"
          buttonSize="medium"
          label="공유하기"
          onClick={handleShare} // 현재 페이지 URL 복사 및 알림
        />
      </ButtonWrapper>
      <Section>
        <ReadTitle text="소개 내용" iconSrc={handIcon} />
        <Content>{stripHtmlTags(postData.content)}</Content>{" "}
      </Section>

      {/* 작성자와 로그인 사용자가 동일할 때만 수정 및 삭제 버튼 표시 */}
      {postData.user_profile.email === currentUserEmail && (
        <ButtonWrapper>
          <Button
            buttonType="fill"
            buttonSize="medium"
            label="수정"
            onClick={onEdit}
          />
          <Button
            buttonType="fill"
            buttonSize="medium"
            label="삭제"
            onClick={handleDelete} // 삭제 시 알림 표시
          />
        </ButtonWrapper>
      )}
    </PostFormContainer>
  );
};

export default MeetDetail;
