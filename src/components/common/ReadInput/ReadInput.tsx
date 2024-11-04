import { Container, Label, StyledInput } from "./ReadInput.styles"; // 각각의 스타일 컴포넌트를 개별로 임포트

interface ReadInputProps {
  label?: string;
  value: string;
}

const ReadInput: React.FC<ReadInputProps> = ({ label, value }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput type="text" value={value} readOnly disabled />{" "}
      {/* readOnly, disabled 속성 추가 */}
    </Container>
  );
};

export default ReadInput;
