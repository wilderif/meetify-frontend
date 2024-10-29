import {
  Overlay,
  StyledRegisterModal,
  Title,
  CloseButton,
  ButtonContainer,
  InputWrapper,
  LoginText,
  BoldText,
} from "../login/LoginModal.styles";
import { StyledButton } from "../../common/button/Button.styles";
import Input from "../login/Input";

interface RegisterModalProps {
  onClose: () => void;
  onToggleView: () => void; // 모달 전환 함수
}

const RegisterModal = ({ onClose, onToggleView }: RegisterModalProps) => {
  return (
    <Overlay>
      <StyledRegisterModal>
        <CloseButton onClick={onClose} />
        <Title />
        <InputWrapper>
          <Input type="email" placeholder="이메일" />
          <Input type="text" placeholder="닉네임" />
          <Input type="password" placeholder="비밀번호" iconType="password" />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            iconType="password"
          />
        </InputWrapper>
        <ButtonContainer>
          <StyledButton buttonType="fill" buttonSize="large">
            회원가입
          </StyledButton>
          <LoginText>
            이미 계정이 있으신가요?{" "}
            <BoldText onClick={onToggleView}>로그인</BoldText>
          </LoginText>
        </ButtonContainer>
      </StyledRegisterModal>
    </Overlay>
  );
};

export default RegisterModal;
