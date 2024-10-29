import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
  height: 50px;
  width: 100%;
  max-width: 400px;
  background-color: var(--color-gray-white);
  border-radius: 25px;
  font-size: var(--font-size-head-small);
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: var(--font-size-head-small);
  color: var(--font-color-dark);
  margin-left: 0.5rem;

  &::placeholder {
    color: #b0b3b8;
  }
`;
