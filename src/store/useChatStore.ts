import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ChatRoomInfo } from "../types/Chat";

interface ChatStoreState {
  userChatRooms: Record<string, ChatRoomInfo[]>; // userId별로 채팅방 관리
  nextRoomId: number;
  setChatRooms: (userId: string, rooms: ChatRoomInfo[]) => void;
  addChatRoom: (userId: string, room: Omit<ChatRoomInfo, "roomId">) => void; // roomId 제외
  removeChatRoom: (userId: string, otherUserId: string) => void; // otherUserId 사용
}

const useChatStore = create<ChatStoreState>()(
  persist(
    (set) => ({
      userChatRooms: {}, // userId별로 초기화된 채팅방 리스트
      nextRoomId: 1, // 초기 roomId 값 설정

      // 전역 상태에 특정 userId의 채팅방 리스트 설정
      setChatRooms: (userId: string, rooms: ChatRoomInfo[]) =>
        set((state) => ({
          userChatRooms: {
            ...state.userChatRooms,
            [userId]: rooms,
          },
        })),

      // 특정 userId의 채팅방 추가
      addChatRoom: (userId: string, room: Omit<ChatRoomInfo, "roomId">) =>
        set((state) => {
          const newRoomId = state.nextRoomId;
          const newRoom: ChatRoomInfo = {
            ...room,
            roomId: newRoomId.toString(),
          };
          const userRooms = state.userChatRooms[userId] || [];
          return {
            userChatRooms: {
              ...state.userChatRooms,
              [userId]: [...userRooms, newRoom],
            },
            nextRoomId: newRoomId + 1, // roomId 자동 증가
          };
        }),

      // 특정 userId의 otherUserId를 이용한 채팅방 제거
      removeChatRoom: (userId: string, otherUserId: string) =>
        set((state) => {
          const userRooms = state.userChatRooms[userId] || [];
          const updatedRooms = userRooms.filter(
            (room) => room.otherUserId !== otherUserId
          );
          return {
            userChatRooms: {
              ...state.userChatRooms,
              [userId]: updatedRooms,
            },
          };
        }),
    }),
    {
      name: "chat-storage", // 로컬 스토리지 키 설정
      partialize: (state) => ({
        userChatRooms: state.userChatRooms,
        nextRoomId: state.nextRoomId, // userChatRooms와 nextRoomId만 로컬 스토리지에 저장
      }),
    }
  )
);

export default useChatStore;
