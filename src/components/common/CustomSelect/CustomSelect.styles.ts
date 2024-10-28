// src/components/common/CustomSelect/CustomSelect.styled.ts
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  width: 600px;
  margin-bottom: 30px;
  font-family: 'DM Sans', sans-serif;
`;

export const Label = styled.p`
  font-size: var(--font-size-head-small);
  margin-bottom: 8px;
  font-weight: var(--font-weight-semi-bold);
  font-family: inherit;
`;

export const StyledSelect = styled.div`
  .react--select__control {
    width: 100%;
    height: 62px;
    color: var(--primary-color-org);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 3px;
    font-size: var(--font-size-head-small);
    font-weight: var(--font-weight-semi-bold);
    font-family: 'DM Sans', sans-serif;
  }

  .react--select__indicator-separator {
    display: none;
  }
`;
