import { StyledLikeButton, IconWrapper } from "./LikeButton.styles";
import EmptyHeartIcon from "./../../../icon/EmptyHeartIcon/EmptyHeartIcon";
import FillHeartIcon from "./../../../icon/FillHeartIcon/FillHeartIcon";

interface LikeButtonProps {
  /** 관심글 상태 */
  isLiked?: boolean;
  /** 아이콘 클릭 이벤트 */
  onClick?: () => void;
}

const LikeButton = ({ isLiked = false, onClick }: LikeButtonProps) => {
  return (
    <StyledLikeButton onClick={onClick}>
      <IconWrapper>
        {isLiked ? <FillHeartIcon /> : <EmptyHeartIcon />}
      </IconWrapper>
    </StyledLikeButton>
  );
};

export default LikeButton;
