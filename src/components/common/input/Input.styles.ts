import styled from 'styled-components';

export const InputWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
  font-family: 'DM Sans', sans-serif;
`;

export const Label = styled.p`
  font-size: var(--font-size-head-small);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid var(--bg-gray-light);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);
  font-family: 'DM Sans', sans-serif;

  &::placeholder {
    color: var(--bg-gray-light);
  }
`;
