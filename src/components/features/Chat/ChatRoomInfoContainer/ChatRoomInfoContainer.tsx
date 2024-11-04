import { ChatRoomInfo } from "../../../../types/Chat";
import BannerIcon from "../../../common/icon/BannerIcon/BannerIcon";
import ChatRoomItem from "../ChatRoomInfo/ChatRoomInfo";
import {
  ChatRoomInfoContainerWrapper,
  EmptyChatRoomInfoContainerWrapper,
} from "./ChatRoomInfoContainer.styles";

interface ChatRoomContainerProps {
  /** 채팅 정보 리스트 */
  chatRoomList?: ChatRoomInfo[] | null;
  onChatRoomClick?: (chatRoom: string, otherUserId: string) => void; // 클릭 이벤트 처리 함수
  selectedRoomId: string;
}
const ChatRoomContainer = ({
  chatRoomList,
  onChatRoomClick = () => {},
  selectedRoomId,
}: ChatRoomContainerProps) => {
  // chatRoomList가 null일 경우 빈 배열로 초기화
  const rooms = chatRoomList || [];

  return rooms.length === 0 ? (
    <EmptyChatRoomInfoContainerWrapper>
      <div className="contact">
        <BannerIcon></BannerIcon>
      </div>
      <p>지금 바로 Meetify 게시글에서</p>
      <p> 1:1 문의를 통해 대화를 시작해보세요</p>
    </EmptyChatRoomInfoContainerWrapper>
  ) : (
    <ChatRoomInfoContainerWrapper>
      {rooms.map((chatRoom) => (
        <ChatRoomItem
          key={chatRoom.roomId}
          imgUrl={chatRoom.imgUrl}
          name={chatRoom.name}
          unReadMsgCnt={chatRoom.unReadMsgCnt}
          lastMsg={chatRoom.lastMsg}
          creadtedAt={chatRoom.creadtedAt}
          onClick={() => onChatRoomClick(chatRoom.roomId, chatRoom.otherUserId)} // 클릭 시 roomId 전달
          roomId={chatRoom.roomId}
          selectedRoomId={selectedRoomId}
        />
      ))}
    </ChatRoomInfoContainerWrapper>
  );
};

export default ChatRoomContainer;
