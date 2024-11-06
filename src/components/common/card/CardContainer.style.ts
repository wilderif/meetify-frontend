import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;
