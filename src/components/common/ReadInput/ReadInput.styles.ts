import styled from "styled-components";

interface StyledInputProps {
  $variant?: "primary" | "placeholder" | "default";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: var(--font-size-head-small);
  margin-bottom: 7px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledInput = styled.input<StyledInputProps>`
  min-height: 62px;
  width: 600px;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 10px;
  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-semi-bold);
  align-items: center;
  display: flex;
  background-color: var(--font-color-white);
  border: 1px solid #e4e4e4;

  color: ${(props) => {
    switch (props.$variant) {
      case "primary":
        return "var(--primary-color-org)"; // primary 색상
      case "placeholder":
        return "var(--bg-gray-light)"; // 연한 회색
      default:
        return "var(--font-color-dark)"; // 기본 검정색
    }
  }};
`;
