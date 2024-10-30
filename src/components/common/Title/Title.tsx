import { TitleWrapper, StepIcon, TitleText } from './Title.styles';
import { DEFAULT_STEP_NUMBER } from '../../../constants/Title';

interface TitleProps {
  /** 제목 텍스트 */
  text: string;
  /** 스텝 넘버 */
  stepNumber?: number;
}

const Title: React.FC<TitleProps> = ({
  text,
  stepNumber = DEFAULT_STEP_NUMBER,
}) => (
  <TitleWrapper>
    <StepIcon>{stepNumber}</StepIcon>
    <TitleText>{text}</TitleText>
  </TitleWrapper>
);

export default Title;
