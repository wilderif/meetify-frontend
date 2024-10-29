import {
  StyledLoginModal,
  Title,
  CloseButton,
  ButtonContainer,
} from "./LoginModal.styles";
import Input from "./Input";
import { StyledButton } from "../../common/button/Button.styles";

interface LoginModalProps {
  label: string;
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <StyledLoginModal>
      <CloseButton onClick={onClose} />
      <Title>Meetify</Title>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" iconType="password" />
      <ButtonContainer>
        <StyledButton buttonType="fill" buttonSize="large">
          로그인
        </StyledButton>
        <StyledButton buttonType="outline" buttonSize="large">
          회원가입
        </StyledButton>
      </ButtonContainer>
    </StyledLoginModal>
  );
};

export default LoginModal;
