import {
  StyledLoginModal,
  Title,
  CloseButton,
  ButtonContainer,
  LoginText,
  ProPosalText,
} from "../login/LoginModal.styles";
import { StyledButton } from "../../common/button/Button.styles";

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal = ({ onClose }: RegisterModalProps) => {
  return (
    <StyledLoginModal>
      <CloseButton onClick={onClose} />
      <Title>Meetify</Title>
      <ProPosalText>
        업무 분야와 경력에 맞춰 <br />딱 맞는 정보를 찾고 싶다면?
      </ProPosalText>
      <ButtonContainer>
        <StyledButton buttonType="fill" buttonSize="large">
          내 프로필 작성하기
        </StyledButton>
        <LoginText>다음에 작성할래요</LoginText>
      </ButtonContainer>
    </StyledLoginModal>
  );
};

export default RegisterModal;
