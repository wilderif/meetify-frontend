import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";

export const StyledBackIcon = styled(IoReturnUpBack)`
  position: absolute;
  left: 13%;
  top: 100%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: var(--font-color-dark);
`;
