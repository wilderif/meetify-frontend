import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 3px solid var(--color-gray-light);
  margin-bottom: 30px;
  font-family: "DM Sans", sans-serif;
`;

export const StepIcon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: var(--primary-color-org);
  color: var(--color-white);
  font-weight: var(--font-weight-semi-bold);
  border-radius: 50%;
  margin-right: 12px;
  font-size: var(--font-size-head-small);
`;

export const TitleText = styled.span`
  font-size: var(--font-size-head-medium);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);
`;
