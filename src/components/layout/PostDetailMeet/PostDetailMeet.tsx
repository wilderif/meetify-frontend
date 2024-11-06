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

// interface UserProfile {
//   name: string;
//   profile_image: string;
// }

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
    // user_profile: UserProfile;
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
  return (
    <PostFormContainer>
      <Section>
        <ReadTitle
          text={postData.title}
          iconSrc={handIcon}
          author={"임시 아무 이름"}
          // authorImageSrc={postData.user_profile.profile_image}
          createdAt={postData.created_at}
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

      <Section>
        <ReadTitle text="소개 내용" iconSrc={handIcon} />
        <Content>{stripHtmlTags(postData.content)}</Content>{" "}
      </Section>

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
          onClick={onDelete}
        />
      </ButtonWrapper>
    </PostFormContainer>
  );
};

export default MeetDetail;
