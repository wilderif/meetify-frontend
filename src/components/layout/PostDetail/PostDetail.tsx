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

interface PostDetailProps {
  postData: {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    participationMethod: string;
    recruitmentCapacity: string;
    interests: string[];
    position: string;
    duration: string;
    deadline: string;
    content: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({
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
          author={postData.author}
          authorImageSrc={handIcon}
          createdAt={postData.createdAt}
        />
        <Row>
          <FormColumn>
            <ReadInput label="진행 방식" value={postData.participationMethod} />
          </FormColumn>
          <FormColumn>
            <ReadInput label="모집 인원" value={postData.recruitmentCapacity} />
          </FormColumn>
          <FormColumn>
            <ReadInput
              label="기술 스택"
              value={postData.interests.join(", ")}
            />
          </FormColumn>
          <FormColumn>
            <ReadInput label="진행 기간" value={postData.duration} />
          </FormColumn>
          <FormColumn>
            <ReadInput label="모집 포지션" value={postData.position} />
          </FormColumn>
          <FormColumn>
            <ReadInput label="모집 마감일" value={postData.deadline} />
          </FormColumn>
        </Row>
      </Section>

      <Section>
        <ReadTitle text="소개내용" iconSrc={handIcon} />
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

export default PostDetail;
