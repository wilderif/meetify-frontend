import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
import LogoGradation from "../../common/Logo/LogoGradation";

const modalAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

/* 오버레이 스타일 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/* 회원가입 모달 사이즈 */
export const StyledRegisterModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-color: #ffff;
  border: 2px solid var(--bg-gray-light);
  border-radius: 30px;
  width: 500px;
  height: 550px;
`;

/* 로그인 모달 사이즈 */
export const StyledLoginModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-color: #ffff;
  border: 2px solid var(--bg-gray-light);
  border-radius: 30px;
  width: 500px;
  height: 450px;
  animation: ${modalAnimation} 0.3s ease-out;
`;

export const Title = styled(LogoGradation)``;

export const CloseButton = styled(IoClose)`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: var(--font-color-light);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 10px 0;

  &:first-child {
    margin-top: 20px;
  }
`;

export const Input = styled.input<{ $hasIcon?: boolean; $isError?: boolean }>`
  display: block;
  padding: 10px 20px;
  padding-right: ${({ $hasIcon }) => ($hasIcon ? "40px" : "20px")};
  color: var(--font-color-dark);
  border: 1px solid
    ${({ $isError }) => ($isError ? "red" : "var(--bg-gray-light)")};
  border-radius: 30px;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  cursor: text;

  &:focus {
    border-color: var(--primary-color-org);
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 10px;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%); /* isError일때 아이콘 처리 실패 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  cursor: pointer;
`;

export const LoginText = styled.span`
  color: var(--font-color-dark);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: var(--font-color-light);
  }
`;

export const BoldText = styled.span`
  color: var(--primary-color-org);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const ProPosalText = styled.span`
  color: var(--font-color-dark);
  font-size: 16px;
  text-align: center;
  margin: 20px;
  line-height: 1.5;
`;
