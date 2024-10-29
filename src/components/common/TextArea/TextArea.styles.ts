import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 30px;
  font-family: 'DM Sans', sans-serif;
`;

export const Label = styled.label`
  font-size: var(--font-size-head-small);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
  display: block;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid var(--bg-gray-light);
  border-radius: 10px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 10px;

  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-light);
  font-family: 'DM Sans', sans-serif;
  resize: none; /* 리사이즈 핸들 제거 */
  text-align: left;

  &::placeholder {
    color: var(--bg-gray-light);
  }

  &:focus {
    border: 2px solid var(--primary-color-org);
    outline: none;
  }
`;
