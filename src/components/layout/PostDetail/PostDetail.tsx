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

// interface UserProfile {
//   name: string;
//   profile_image: string;
// }

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
              label="진행 방식"
              value={postData.participation_method}
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_capacity && (
            <FormColumn>
              <ReadInput
                label="모집 인원"
                value={postData.recruitment_capacity.toString()}
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="기술 스택"
              value={postData.interests.join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.duration && (
            <FormColumn>
              <ReadInput
                label="진행 기간"
                value={postData.duration}
                variant="primary"
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="모집 포지션"
              value={postData.position.join(", ")}
              variant="primary"
            />
          </FormColumn>
          {postData.recruitment_deadline && (
            <FormColumn>
              <ReadInput
                label="모집 마감일"
                value={postData.recruitment_deadline}
                variant="primary"
              />
            </FormColumn>
          )}
        </Row>
      </Section>
      <Section>
        <ReadTitle text="소개 내용" iconSrc={handIcon} />
        <Content>{stripHtmlTags(postData.content)}</Content>{" "}
        {/* HTML 태그 제거 후 표시 */}
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

export default ProjectDetail;
