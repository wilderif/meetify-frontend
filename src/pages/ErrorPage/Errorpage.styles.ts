import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
`;

export const ErrorImage = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ErrorBold = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: var(--primary-color-org);
  padding-bottom: 1rem;
`;
export const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--font-color-light);
  margin-bottom: 2rem;
  line-height: 1.5;
`;
