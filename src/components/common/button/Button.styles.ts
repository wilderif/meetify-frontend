import styled, { css } from "styled-components";

interface StyledButtonProps {
  buttonType: "fill" | "outline";
  buttonSize: "small" | "medium" | "large";
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border-radius: 30px;
  padding: 12px 0;
  font-weight: var(--font-weight-semi-bold);
  user-select: none;

  ${({ buttonType }) =>
    buttonType === "fill"
      ? css`
          background-color: var(--primary-color-org);
          color: var(--color-white);
          border: none;
          &:hover {
            opacity: 0.8;
          }
        `
      : css`
          background-color: var(--color-white);
          color: var(--primary-color-org);
          border: 1px solid var(--primary-color-org);
          &:hover {
            opacity: 0.8;
          }
        `}

  ${({ buttonSize }) =>
    buttonSize === "small"
      ? css`
          width: var(--button-width-small);
          font-size: var(--font-size-body-small);
        `
      : buttonSize === "medium"
      ? css`
          width: var(--button-width-medium);
          font-size: var(--font-size-body-medium);
        `
      : css`
          width: var(--button-width-large);
          font-size: var(--font-size-body-medium);
        `}
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
  vertical-align: middle;
`;
