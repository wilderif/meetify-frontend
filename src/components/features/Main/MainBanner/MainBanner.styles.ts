import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
`;

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 450px;
  background-image: url("/src/assets/banner/Banner-Bg.svg");
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: var(--max-width);
  user-select: none;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: var(--font-color-dark);
`;

export const MainText = styled.h1`
  font-size: var(--font-size-head-large);
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  padding-top: 3rem;
`;

export const HighlightedLogo = styled.span`
  font-family: "HakgyoansimDunggeunmisoTTF-B";
  background: linear-gradient(120deg, #ff935a 28.37%, #ffdc78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubText = styled.p`
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 1rem;
  max-width: 1300px;
  margin: 0 auto;
  text-align: right;
  user-select: none;
`;

export const HighlightedText = styled.span`
  color: var(--primary-color-org);
`;
