import styled from "styled-components";

export const PostFormContainer = styled.div``;

export const Section = styled.div`
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px 0px;
  flex-wrap: wrap;
`;

export const FormColumn = styled.div`
  min-width: 600px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

// 추가 스타일
export const Content = styled.pre`
  min-height: 300px;
  white-space: pre-wrap;
  font-size: var(--font-size-body-large);
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  color: var(--font-color-dark);
`;
