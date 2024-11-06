import ProfileImage from "../ProfileImage/ProfileImage";
import { PostType, Position, Interests } from "../../../constants/index";
import { formatDate, isToday } from "../../../utils/dateUtils";
import { sliceList } from "../../../utils/arrayUtils";
import {
  StyledCard,
  Header,
  DateText,
  Title,
  Author,
  AuthorName,
} from "./Card.style";
import {
  LikeButton,
  NewTag,
  PositionTagContainer,
  PostTag,
  TechIconContainer,
} from "./elements/index";
/**
 * TODO
 * 임시로 사용하는 프로필 이미지로 첨부파일 업로드기능 개발 시, 실제 프로필이미지로 교체
 */
import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";

interface CardProps {
  /** 관심글 유/무 */
  isLiked: boolean;
  /** 모집유형 */
  postType: keyof typeof PostType;
  /** 작성일 */
  date: Date;
  /** 제목 */
  title: string;
  /** 모집포지션 */
  positionList: Array<keyof typeof Position>;
  /** 기술스택 리스트 */
  techStackList: Array<keyof typeof Interests>;
  /** 작성자 */
  author: string;
}

// (포지션, 기술스택) 최대 표시 개수 정의
const MAX_POSITION_DISPLAY = 3;
const MAX_TECH_STACK_DISPLAY = 8;

const Card = ({
  isLiked,
  postType,
  date,
  title,
  positionList,
  techStackList,
  author,
}: CardProps) => {
  // 날짜 포맷팅
  const formattedDate = formatDate(date);
  // (포지션, 기술 스택) 최대 표시 개수 노출
  const displayedPositions = sliceList(positionList, MAX_POSITION_DISPLAY);
  const displayedTechStacks = sliceList(techStackList, MAX_TECH_STACK_DISPLAY);

  return (
    <StyledCard>
      <Header>
        <PostTag postType={postType} />
        {isToday(date) && <NewTag />}
        <LikeButton isLiked={isLiked} />
      </Header>

      <DateText>마감일 | {formattedDate}</DateText>
      <Title>{title}</Title>

      <PositionTagContainer positionList={displayedPositions} />
      <TechIconContainer techStackList={displayedTechStacks} />

      <Author>
        <ProfileImage src={DummyProfileImage} usageType='card' />
        <AuthorName>{author}</AuthorName>
      </Author>
    </StyledCard>
  );
};

export default Card;
