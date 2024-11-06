import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ServerChat, ChatRoomInfo } from "../../types/Chat";
import { SERVER_URL } from "../../constants/Chat";
import useChatStore from "../../store/useChatStore";

interface UseSocketProps {
  userId: string;
  onMessage: (chat: ServerChat) => void;
  onUnreadUpdate: (unreadData: ChatRoomInfo[], roomId?: string) => void;
  onMessageRead: (
    updatedChatList: string[],
    updatedRooms: ChatRoomInfo[]
  ) => void;
}

/**
 * message 타입 response
 */
interface ServerMsgType {
  chat: ServerChat;
  targetId: string;
  unreadData: ChatRoomInfo[];
  roomId?: string;
}

/**
 * message-read 타입 response
 */
interface ServerUnreadMsgType {
  targetId: string;
  rooms: ChatRoomInfo[];
  unreadChatIds: string[];
}
const useSocket = ({
  userId,
  onMessage,
  onUnreadUpdate,
  onMessageRead,
}: UseSocketProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    // 사용자 웹 소켓 클라이언트 리스트에 등록
    if (userId) {
      newSocket.emit("register", userId);
    }

    // 메시지 수신 이벤트 핸들러
    const handleMessage = (response: ServerMsgType) => {
      onMessage(response.chat);
      if (response.unreadData) {
        onUnreadUpdate(response.unreadData, response.roomId);
      }
    };

    // 메시지 읽음 상태 업데이트 이벤트 핸들러
    const handleMessageRead = (response: ServerUnreadMsgType) => {
      onMessageRead(response.unreadChatIds, response.rooms);
    };

    // 이벤트 리스너 등록
    newSocket.on("message", handleMessage);
    newSocket.on("message-read", handleMessageRead);

    // 리스너 해제
    return () => {
      newSocket.off("message", handleMessage);
      newSocket.off("message-read", handleMessageRead);
      newSocket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // 메시지 전송 함수
  const sendMessage = (msg: string, targetId: string) => {
    // Zustand 스토어에서 userChatRooms에서 해당 roomId가 있는지 확인
    const userRooms = useChatStore.getState().userChatRooms[userId] || [];
    const roomExists = userRooms.some((room) => room.otherUserId === targetId);

    // roomId가 존재하는 경우, 채팅방 제거
    if (roomExists) {
      useChatStore.getState().removeChatRoom(userId, targetId);
    }

    if (socket && msg.trim() && targetId) {
      socket.emit("message", {
        senderId: userId,
        targetId,
        message: msg,
      });
    }
  };

  // 읽음 메시지 전송 함수
  const sendUnReadMessage = (unreadChatIds: string[], roomId?: string) => {
    if (socket && unreadChatIds.length && roomId) {
      socket.emit("message-read", {
        unreadChatIds,
        roomId,
        userId,
      });
    }
  };

  return { sendMessage, sendUnReadMessage };
};

export default useSocket;
