import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  font-size: var(--font-size-body-medium);
  color: var(--font-color-dark);
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: var(--bg-gray-light);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 8px;
  font-size: var(--font-size-head-small);
`;
