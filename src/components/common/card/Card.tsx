import ProfileImage from "../ProfileImage/ProfileImage";
import { PostType, Interests, Position } from "../../../constants/index";
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
import { PostListResParams } from "../../../types/PostList";
/**
 * TODO
 * 임시로 사용하는 프로필 이미지로 첨부파일 업로드기능 개발 시, 실제 프로필이미지로 교체
 */
import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";

// (포지션, 기술스택) 최대 표시 개수 정의
const MAX_POSITION_DISPLAY = 3;
const MAX_TECH_STACK_DISPLAY = 8;

const Card = ({
  /** 관심글 유/무 */
  isLiked,
  /** 모집유형 */
  type,
  /** 작성일 */
  created_at,
  /** 마감일 */
  recruitment_deadline,
  /** 제목 */
  title,
  /** 모집포지션 */
  position,
  /** 기술스택 리스트 */
  interests,
  /** 작성자 닉네임 */
  user_profile,
}: PostListResParams) => {
  // 날짜 포맷팅
  const createDate = new Date(created_at);
  const formattedDate = recruitment_deadline
    ? formatDate(new Date(recruitment_deadline))
    : "미정";
  // (포지션, 기술 스택) 최대 표시 개수 노출
  const displayedPositions = sliceList(
    position.map((pos) => pos as keyof typeof Position),
    MAX_POSITION_DISPLAY
  );
  const displayedTechStacks = sliceList(
    interests.map((tech) => tech as keyof typeof Interests),
    MAX_TECH_STACK_DISPLAY
  );

  const handleLikeButtonClick = () => {};

  return (
    <StyledCard>
      <Header>
        <PostTag postType={type as keyof typeof PostType} />
        {isToday(createDate) && <NewTag />}
        <LikeButton isLiked={isLiked} onClick={handleLikeButtonClick} />
      </Header>

      <DateText>마감일 | {formattedDate}</DateText>
      <Title>{title}</Title>

      <PositionTagContainer positionList={displayedPositions} />
      <TechIconContainer techStackList={displayedTechStacks} />

      <Author>
        <ProfileImage src={DummyProfileImage} usageType='card' />
        <AuthorName>{user_profile.nickname}</AuthorName>
      </Author>
    </StyledCard>
  );
};

export default Card;
