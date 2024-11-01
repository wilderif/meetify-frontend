import React, { useState } from "react";
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
import { useValidation } from "../../../hooks/useValidation";
import useAuthStore from "../../../store/useAuthStore";
import useAuthApi from "../../../hooks/useAuthApi";

interface RegisterModalProps {
  onClose: () => void;
  onToggleView: () => void; // 모달 전환 함수
}

const RegisterModal = ({ onClose, onToggleView }: RegisterModalProps) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { validation, validateForm, handleFieldChange } = useValidation(true); // 회원가입 모드로 호출
  const { register } = useAuthApi(); // useAuthApi 훅 사용
  const setEmailInStore = useAuthStore((state) => state.setEmail);
  const setNicknameInStore = useAuthStore((state) => state.setNickname);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm({
      email,
      password,
      passwordConfirm: confirmPassword,
    });

    if (isValid) {
      try {
        await register(email, nickname, password); // 회원가입 메서드 호출
        setEmailInStore(email);
        setNicknameInStore(nickname);
        onClose(); // 회원가입 후 모달 닫기
        console.log("회원가입 성공");
      } catch (error) {
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("입력한 정보가 유효하지 않습니다.");
    }
  };

  return (
    <Overlay>
      <StyledRegisterModal>
        <CloseButton onClick={onClose} />
        <Title />
        <form onSubmit={handleRegister}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                handleFieldChange("email", e.target.value); // 유효성 검사
              }}
              errorMessage={validation.email.message} // 에러 메시지 표시
            />
            <Input
              type="text"
              placeholder="닉네임"
              value={nickname}
              name="nickname"
              onChange={(e) => setNickname(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              iconType="password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                handleFieldChange("password", e.target.value); // 유효성 검사
              }}
              errorMessage={validation.password.message} // 에러 메시지 표시
            />
            <Input
              type="password"
              placeholder="비밀번호 확인"
              iconType="password"
              value={confirmPassword}
              name="passwordConfirm"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleFieldChange("passwordConfirm", e.target.value); // 유효성 검사
              }}
              errorMessage={validation.passwordConfirm?.message} // 에러 메시지 표시
            />
          </InputWrapper>
          <ButtonContainer>
            <StyledButton buttonType="fill" buttonSize="large" type="submit">
              회원가입
            </StyledButton>
            <LoginText>
              이미 계정이 있으신가요?{" "}
              <BoldText onClick={onToggleView}>로그인</BoldText>
            </LoginText>
          </ButtonContainer>
        </form>
      </StyledRegisterModal>
    </Overlay>
  );
};

export default RegisterModal;
