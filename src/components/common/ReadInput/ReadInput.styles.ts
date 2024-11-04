import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: var(--font-size-head-small);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledInput = styled.input`
  min-height: 60px;
  width: 600px;
  border-radius: 10px;
  padding: 0 15px;
  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-semi-bold);
  font-family: "DM Sans", sans-serif;
  align-items: center;
  display: flex;
  color: var(--font-color-light);
  background-color: var(--font-color-white);
  border: 1px solid #c4c4c4;
`;
