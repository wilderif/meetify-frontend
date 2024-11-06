import { useEffect, useState } from "react";
import { ServerChat } from "../../types/Chat";
import { ChatMsgContainerProps } from "../../components/features/Chat/ChatMsgContainer/ChatMsgContainer";

export const useChatFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusChange = (focused: boolean) => setIsFocused(focused);

  return { isFocused, handleFocusChange };
};

export const useUnreadChatIds = (
  isFocused: boolean,
  chatList?: ServerChat[] | null,
  myUsername?: string
) => {
  const [unreadChatIds, setUnreadChatIds] = useState<string[]>([]);

  useEffect(() => {
    if (isFocused && chatList) {
      const unreadIds = chatList
        .filter((chat) => !chat.is_read && chat.sender !== myUsername)
        .map((chat) => chat.chat_id);
      setUnreadChatIds(unreadIds);
    }
  }, [isFocused, chatList, myUsername]);

  return unreadChatIds;
};

export const useAutoScroll = (
  chatEndRef: React.RefObject<HTMLDivElement>,
  chatGroups: ChatMsgContainerProps[]
) => {
  useEffect(() => {
    if (chatGroups.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatGroups]);
};
