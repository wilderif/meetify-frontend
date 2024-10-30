import TechIcon from "./TechIcon/TechIcon";
import { StyledTechIconContainer } from "./TechIconContainer.style";
import Interests from "./../../../../../constants/Interests";

interface TechIconContainerProps {
  /** 기술스택 리스트 */
  techStackList: Array<keyof typeof Interests>;
}

const TechIconContainer = ({ techStackList }: TechIconContainerProps) => {
  return (
    <StyledTechIconContainer>
      {techStackList.map((tech) => (
        <TechIcon key={tech} techStack={tech} />
      ))}
    </StyledTechIconContainer>
  );
};

export default TechIconContainer;
