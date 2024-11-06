import { useNavigate } from "react-router-dom";
import {
  Overlay,
  StyledLoginModal,
  Title,
  CloseButton,
  ButtonContainer,
  LoginText,
  ProPosalText,
  ButtonWrapper,
} from "../login/LoginModal.styles";
import { StyledButton } from "../../common/button/Button.styles";

interface ProposalModalProps {
  onClose: () => void;
}

const ProfileProposal = ({ onClose }: ProposalModalProps) => {
  const navigate = useNavigate();

  const handleClickMyPage = () => {
    onClose();
    navigate("/my-info/edit");
  };

  return (
    <Overlay>
      <StyledLoginModal>
        <CloseButton onClick={onClose} />
        <Title>Meetify</Title>
        <ProPosalText>
          업무 분야와 경력에 맞춰 <br />딱 맞는 정보를 찾고 싶다면?
        </ProPosalText>
        <ButtonContainer>
          <ButtonWrapper>
            <StyledButton
              $buttonType='fill'
              $buttonSize='large'
              onClick={handleClickMyPage}
            >
              내 프로필 작성하기
            </StyledButton>
          </ButtonWrapper>
        </ButtonContainer>
      </StyledLoginModal>
    </Overlay>
  );
};

export default ProfileProposal;
