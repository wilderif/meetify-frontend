import styled, { keyframes } from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  height: auto;
`;

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const HighlightedLogo = styled.span`
  position: absolute;
  font-family: "HakgyoansimDunggeunmisoTTF-B";
  font-size: var(--font-size-head-extraLarge);
  background: linear-gradient(120deg, #ff935a 28.37%, #ffdc78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${trackingInExpand} 1s ease-out;
  display: inline-block;
`;

export const FixedText = styled.span`
  position: relative;
  margin: 200px;
  font-size: 50px;
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

export const WriteButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

const bounceTop = keyframes`
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%, 55%, 75%, 87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
    animation: fadeIn 1s ease-in-out 0.5s forwards; 
  }
`;

export const ButtonWrapper = styled.div`
  animation: ${bounceTop} 1.5s ease-in-out 0.5s forwards;
  opacity: 0;
`;
