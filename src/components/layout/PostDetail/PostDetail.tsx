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

interface UserProfile {
  name: string;
  profile_image: string;
}

interface PostDetailProps {
  postData: {
    id: string;
    title: string;
    content: string;
    interests: string[];
    position: string;
    participation_method: string;
    recruitment_capacity?: string;
    duration?: string;
    recruitment_deadline?: string;
    created_at: string;
    user_profile: UserProfile;
  };
  onEdit: () => void;
  onDelete: () => void;
}

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
          author={postData.user_profile.name}
          authorImageSrc={postData.user_profile.profile_image}
          createdAt={postData.created_at}
        />
        <Row>
          <FormColumn>
            <ReadInput
              label="진행 방식"
              value={postData.participation_method}
            />
          </FormColumn>
          {postData.recruitment_capacity && (
            <FormColumn>
              <ReadInput
                label="모집 인원"
                value={postData.recruitment_capacity.toString()}
              />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput
              label="기술 스택"
              value={postData.interests.join(", ")}
            />
          </FormColumn>
          {postData.duration && (
            <FormColumn>
              <ReadInput label="진행 기간" value={postData.duration} />
            </FormColumn>
          )}
          <FormColumn>
            <ReadInput label="모집 포지션" value={postData.position} />
          </FormColumn>
          {postData.recruitment_deadline && (
            <FormColumn>
              <ReadInput
                label="모집 마감일"
                value={postData.recruitment_deadline}
              />
            </FormColumn>
          )}
        </Row>
      </Section>

      <Section>
        <ReadTitle text="소개 내용" iconSrc={handIcon} />
        <Content>{postData.content}</Content>
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
