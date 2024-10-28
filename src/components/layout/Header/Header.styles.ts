import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: yellow;
  padding: 0 3rem;
`;

export const LogoContainer = styled.div``;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > *:last-child {
    margin-left: 1rem;
  }
`;
