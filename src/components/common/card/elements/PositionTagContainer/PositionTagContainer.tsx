import PositionTag from "./PositionTag/PositionTag";
import { StyledPositionTagContainer } from "./PositionTagContainer.style";
import Position from "../../../../../constants/Position";

interface PositionTagContainerProps {
  /** 모집포지션 리스트 */
  positionList: Array<keyof typeof Position>;
}

const PositionTagContainer = ({ positionList }: PositionTagContainerProps) => {
  return (
    <StyledPositionTagContainer>
      {positionList.map((position) => (
        <PositionTag key={position} position={position} />
      ))}
    </StyledPositionTagContainer>
  );
};

export default PositionTagContainer;
