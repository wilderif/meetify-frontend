import styled from "styled-components";

export const DropdownContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  z-index: 10;
  top: 90px;
  right: 50px;
  margin-top: 10px;
  width: 14rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.15);
  padding: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cecece;
  margin: 0.5rem 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  font-size: var(--font-size-head-small);
  color: var(--font-color-dark);
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-left: 4px;
`;
