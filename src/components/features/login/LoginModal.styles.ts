import styled from "styled-components";
import { IoClose } from "react-icons/io5";

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
  width: 600px;
  height: 650px;
`;

export const Title = styled.h2`
  font-family: "HakgyoansimDunggeunmisoTTF-B", sans-serif;
  font-weight: 700;
  font-size: 60px;
  background: linear-gradient(
    to bottom right,
    var(--primary-color-gra-start) 28%,
    var(--primary-color-gra-end) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const CloseIcon = styled(IoClose)`
  position: absolute;
  top: 60px;
  right: 60px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: var(--font-color-light);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 10px 0;
`;

export const Input = styled.input<{ hasIcon?: boolean }>`
  display: block;
  padding: 10px 20px;
  padding-right: ${({ hasIcon }) => (hasIcon ? "40px" : "20px")};
  color: var(--font-color-dark);
  border: 1px solid var(--bg-gray-light);
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
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
  margin-top: 20px;
  gap: 20px;
`;

export const LoginText = styled.span`
  color: var(--font-color-dark);
  font-size: 14px;
`;

export const BoldText = styled.span`
  color: var(--primary-color-org);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
