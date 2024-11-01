import styled from "styled-components";
import PrevIcon from "../icon/PrevIcon/PrevIcon";
import NextIcon from "../icon/NextIcon/NextIcon";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

export const ButtonWrapper = styled.div`
  margin: 0 5px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--primary-color-org-light)" : "var(--color-white)"};
  color: var(--font-color-light);
  border: none;
  border-radius: 50%;
  padding: 5px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const IconStyled = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
`;

export const PrevIconComponent = PrevIcon;
export const NextIconComponent = NextIcon;
