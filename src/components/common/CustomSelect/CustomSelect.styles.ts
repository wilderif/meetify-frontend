import styled, { css } from 'styled-components';

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

// default: 글 작성 Select, rounded: 카테고리 Select
export const StyledSelect = styled.div<{ variant: 'default' | 'rounded' }>`
  .react--select__control {
    height: 60px;
    color: var(--primary-color-org);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 3px;
    font-size: var(--font-size-head-small);
    font-weight: var(--font-weight-semi-bold);
    font-family: 'DM Sans', sans-serif;
    align-items: center;
    display: flex;

    ${({ variant }) =>
      variant === 'rounded'
        ? css`
            height: 50px;
            min-width: 120px;
            max-width: 160px;
            border-radius: 30px;
            font-weight: var(--font-weight-semi-bold);
          `
        : css`
            width: 100%; /* default일 때는 가로를 100%로 고정 */
          `}
  }

  .react--select__indicator-separator {
    display: none;
  }
`;
