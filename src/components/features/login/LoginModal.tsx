import {
  Overlay,
  StyledLoginModal,
  Title,
  CloseButton,
  InputWrapper,
  ButtonContainer,
} from "./LoginModal.styles";
import Input from "./Input";

import { StyledButton } from "../../common/button/Button.styles";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <Overlay>
      <StyledLoginModal>
        <CloseButton onClick={onClose} />
        <Title />
        <InputWrapper>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" iconType="password" />
        </InputWrapper>
        <ButtonContainer>
          <StyledButton buttonType="fill" buttonSize="large">
            로그인
          </StyledButton>
          <StyledButton buttonType="outline" buttonSize="large">
            회원가입
          </StyledButton>
        </ButtonContainer>
      </StyledLoginModal>
    </Overlay>
  );
};

export default LoginModal;
