import Card from "./Card";
import { StyledCardContainer } from "./CardContainer.style";
import { PostListResParams } from "../../../types/PostList";

interface CardContainerProps {
  postList: PostListResParams[] | null;
}

const CardContainer = ({ postList }: CardContainerProps) => {
  return (
    <StyledCardContainer>
      {(postList ?? []).map((cardData, idx) => (
        <Card key={idx} {...cardData} />
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
