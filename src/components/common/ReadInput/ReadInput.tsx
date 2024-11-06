import { Container, Label, StyledInput } from "./ReadInput.styles"; // 각각의 스타일 컴포넌트를 개별로 임포트

interface ReadInputProps {
  label?: string;
  value: string;
  variant?: "primary" | "placeholder" | "default"; // variant prop 추가
}

const ReadInput: React.FC<ReadInputProps> = ({
  label,
  value,
  variant = "default",
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput
        type="text"
        value={value}
        readOnly
        disabled
        $variant={variant} // variant 전달
      />
    </Container>
  );
};

export default ReadInput;
