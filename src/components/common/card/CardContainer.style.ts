import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;
