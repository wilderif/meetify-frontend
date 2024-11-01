import Card from "./Card";
import { StyledCardContainer } from "./CardContainer.style";

// 임시 더미 데이터
const cards = Array(8).fill({
  /** 관심글 유/무 */
  isLiked: false,
  /** 모집유형 */
  postType: "PROJECT",
  /** 작성일 */
  date: new Date(),
  /** 제목 */
  title: "프로젝트 제목",
  /** 모집포지션 */
  positionList: ["FRONTEND", "BACKEND", "PM"],
  /** 기술스택 리스트 */
  techStackList: ["REACT_JS", "MONGO_DB", "TYPESCRIPT"],
  /** 작성자 */
  author: "아이디",
});

const CardContainer = () => {
  return (
    <StyledCardContainer>
      {cards.map((cardData, idx) => (
        <Card key={idx} {...cardData} />
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
