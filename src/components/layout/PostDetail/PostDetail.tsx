import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../common/button/Button";
import {
  PostFormContainer,
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  Content,
} from "./PostDetail.styles";
import ReadInput from "../../common/ReadInput/ReadInput";
import ReadTitle from "../../common/ReadTitle/ReadTitle";
import handIcon from "../../../assets/post-image/hand.svg";
import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import useAuthStore from "../../../store/useAuthStore";

// 상수 파일 import
import ParticipationMethod from "../../../constants/ParticipationMethod";
import Position from "../../../constants/Position";
import RecruitmentCapacity from "../../../constants/RecruitmentCapacity";
import Interests from "../../../constants/Interests";
import Duration from "../../../constants/Duration";

interface PostDetailProps {
  postData: {
    id: string;
    title: string;
    content: string;
    interests: string[];
    position: string[];
    participation_method: string;
    recruitment_capacity?: string;
    duration?: string;
    recruitment_deadline?: string;
    created_at: string;
    user_profile: {
      nickname: string;
      email: string;
      profile_image: string;
    };
  };
  onEdit: () => void;
  onDelete: () => void;
}

const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>?/gm, ""); // 정규 표현식을 사용하여 HTML 태그 제거
};

const ProjectDetail: React.FC<PostDetailProps> = ({
  postData,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();
  const formattedDate = dayjs(postData.created_at).format("YYYY-MM-DD");
  const currentUserEmail = useAuthStore((state) => state.email); // 현재 로그인한 사용자 ID
  console.log("현재 postData:", postData);
  // 문의하기 클릭 시 /chats로 이동
  const handleInquiry = () => {
    navigate("/chats");
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
          authorImageSrc={
            postData.user_profile.profile_image || DummyProfileImage
          }
          createdAt={formattedDate}
        />
        <Row>
          <FormColumn>
            <ReadInput
              label="진행 방식"
              value={
                ParticipationMethod[
                  postData.participation_method as keyof typeof ParticipationMethod
                ] || postData.participation_method
              }
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_capacity && (
            <FormColumn>
              <ReadInput
                label="모집 인원"
                value={
                  RecruitmentCapacity[
                    Number(
                      postData.recruitment_capacity
                    ) as keyof typeof RecruitmentCapacity
                  ] || postData.recruitment_capacity
                }
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="기술 스택"
              value={postData.interests
                .map(
                  (interest) =>
                    Interests[interest as keyof typeof Interests] || interest
                )
                .join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.duration && (
            <FormColumn>
              <ReadInput
                label="진행 기간"
                value={
                  Duration[postData.duration as keyof typeof Duration] ||
                  postData.duration
                }
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="모집 포지션"
              value={postData.position
                .map((pos) => Position[pos as keyof typeof Position] || pos)
                .join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_deadline && (
            <FormColumn>
              <ReadInput
                label="모집 마감일"
                value={dayjs(postData.recruitment_deadline).format(
                  "YYYY-MM-DD"
                )}
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
        {/* HTML 태그 제거 후 표시 */}
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

export default ProjectDetail;
