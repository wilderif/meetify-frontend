import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledWriteModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 30px;
  width: 750px;
  height: 330px;
`;

export const CloseButton = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: var(--font-color-light);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  gap: 20px;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  margin-top: 0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ButtonText = styled.div`
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--font-color-light);
  margin-bottom: 15px;
`;

export const ButtonContentTitle = styled.strong`
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  color: var(--font-color-light);
  margin-bottom: 0px;
`;

export const ButtonDescription = styled.div`
  font-size: 11px;
  color: var(--font-color-light);
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 20px;
  border: 1px solid var(--bg-gray-light);
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--primary-color-org-light);

    ${ButtonText}, ${ButtonContentTitle}, ${ButtonDescription} {
      color: var(--primary-color-org);
    }
  }
`;
