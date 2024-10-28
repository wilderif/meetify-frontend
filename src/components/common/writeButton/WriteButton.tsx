import { StyledWriteButton } from "./WriteButton.styles";

interface WriteButtonProps {
  label: string;
  onClick?: () => void;
}

const WriteButton = ({ label, onClick }: WriteButtonProps) => {
  return <StyledWriteButton onClick={onClick}>{label}</StyledWriteButton>;
};

export default WriteButton;
