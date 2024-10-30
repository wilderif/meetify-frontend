import styled from "styled-components";

export const StyledMainTabs = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem 0 1.5rem 0;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  font-size: var(--font-size-head-medium);
  font-weight: var(--font-weight-semi-bold);
  cursor: pointer;
  transition: color 0.3s;
  color: ${({ isActive }) =>
    isActive ? "var(--primary-color-org)" : "var(--font-color-dark)"};

  &:hover {
    color: var(--primary-color-org);
  }
`;
