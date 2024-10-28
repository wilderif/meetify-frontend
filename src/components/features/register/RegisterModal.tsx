import {
  StyledLoginModal,
  Title,
  CloseIcon as StyledCloseIcon,
  ButtonContainer,
  LoginText,
  BoldText,
} from "../login/LoginModal.styles";
import { StyledButton } from "../../common/button/Button.styles";
import Input from "../login/Input";

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal = ({ onClose }: RegisterModalProps) => {
  return (
    <StyledLoginModal>
      <StyledCloseIcon onClick={onClose} />
      <Title>Meetify</Title>
      <Input type="email" placeholder="이메일" />
      <Input type="text" placeholder="닉네임" />
      <Input type="password" placeholder="비밀번호" iconType="password" />
      <Input type="password" placeholder="비밀번호 확인" iconType="password" />
      <ButtonContainer>
        <StyledButton buttonType="fill" buttonSize="large">
          회원가입
        </StyledButton>
        <LoginText>
          이미 계정이 있으신가요? <BoldText>로그인</BoldText>
        </LoginText>
      </ButtonContainer>
    </StyledLoginModal>
  );
};

export default RegisterModal;
