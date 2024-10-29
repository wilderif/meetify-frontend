import { StyledPositionTag } from "./PositionTag.styles";
import Position from "./../../../../../constants/Position";

interface PositionTagProps {
  /** 모집포지션 */
  position: keyof typeof Position;
}

const PositionTag = ({ position }: PositionTagProps) => {
  return <StyledPositionTag>{Position[position]}</StyledPositionTag>;
};

export default PositionTag;
