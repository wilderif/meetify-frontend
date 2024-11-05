import styled from "styled-components";

export const ChatRoomInfoContainerWrapper = styled.div`
  min-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: var(--color-chat-bg);
`;
export const EmptyChatRoomInfoContainerWrapper = styled.div`
  min-width: 512px;
  width: max-content;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-chat-bg);

  font-size: var(--font-size-head-small);
  font-weight: var(--font-weight-bold);
`;
