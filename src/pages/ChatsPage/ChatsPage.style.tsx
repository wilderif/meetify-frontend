import styled from "styled-components";

const ChatsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 200px 0px 200px;
  gap: 24px;

  @media (max-width: 900px) {
    margin: 50px 20px 0px 20px;
    height: calc(100vh - 50px); /* 모바일에서도 높이 조정 */
    overflow: hidden; /* 필요 시 세로 스크롤 제거 */
  }
`;
export default ChatsPageWrapper;

interface ChatRoomInfoContainerWrapperProps {
  isOpen: boolean;
}

export const ChatRoomInfoContainerWrapper = styled.div<ChatRoomInfoContainerWrapperProps>`
  display: flex;

  @media (max-width: 900px) {
    min-width: 250px;
    min-height: 700px;

    position: absolute;
    left: 0;

    border-radius: 16px;

    background-color: var(--color-white);

    z-index: 100;
    // 애니메이션 효과
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

export const ToggleSidebarButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justifiy-content: center;
    min-width: 40px;
    font-size: 40px;
    min-height: 700px;
    max-height: 700px;
  }
`;
