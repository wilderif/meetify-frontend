import { useState } from "react";
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
import { useValidation } from "../../../hooks/useValidation";
import useAuthStore from "../../../store/useAuthStore";
import useAuthApi from "../../../hooks/useAuthApi";

interface LoginModalProps {
  onClose: () => void;
  onToggleView: () => void;
  onLoginSuccess: () => void; // 로그인 성공 시 호출할 함수
}

const LoginModal = ({
  onClose,
  onToggleView,
  onLoginSuccess,
}: LoginModalProps) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { validation, validateForm, handleFieldChange } = useValidation();
  const { login } = useAuthApi(); // useAuthApi 훅 사용
  const setEmailInStore = useAuthStore((state) => state.setEmail);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    handleFieldChange(name, value);
  };

  const handleSubmit = async () => {
    if (validateForm(formData)) {
      try {
        await login(formData.email, formData.password); // 로그인 메서드 호출
        setEmailInStore(formData.email);
        onLoginSuccess(); // 로그인 성공 시 호출하여 isLogin 상태 업데이트
        onClose(); // 로그인 성공 후 모달 닫기
        console.log("로그인 성공");
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("입력한 정보가 유효하지 않습니다.");
    }
  };

  return (
    <Overlay>
      <StyledLoginModal>
        <CloseButton onClick={onClose} />
        <Title />
        <InputWrapper>
          <Input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            name="email"
            hasError={!validation.email.isValid}
            errorMessage={
              !validation.email.isValid ? validation.email.message : ""
            }
          />
          <Input
            type="password"
            placeholder="비밀번호"
            iconType="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            hasError={!validation.password.isValid}
            errorMessage={
              !validation.password.isValid ? validation.password.message : ""
            }
          />
        </InputWrapper>
        <ButtonContainer>
          <StyledButton
            buttonType="fill"
            buttonSize="large"
            onClick={handleSubmit}
          >
            로그인
          </StyledButton>
          <StyledButton
            buttonType="outline"
            buttonSize="large"
            onClick={onToggleView}
          >
            회원가입
          </StyledButton>
        </ButtonContainer>
      </StyledLoginModal>
    </Overlay>
  );
};

export default LoginModal;
