import styled from "styled-components";

export const StyledWriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: var(--primary-color-org);
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
