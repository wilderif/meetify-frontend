import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useChatStore from "../../store/useChatStore";
import useAuthStore from "../../store/useAuthStore";
import axios from "axios";
import { SERVER_URL } from "../../constants/Chat";

const TestChat = () => {
  /**
   * 1:1 문의 테스트용 페이지, 이후 1:1문의 개발 끝나면 삭제
   */
  const [targetId, setTargetId] = useState<string>("");
  const navigate = useNavigate();
  const userId = useAuthStore((state) => state.email); // 현재 로그인한 유저 아이디
  const addChatRoom = useChatStore((state) => state.addChatRoom);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!targetId.trim()) {
      console.log("타겟 ID를 입력해주세요.");
      return;
    }
    const user_list = [userId, targetId];

    if (userId !== targetId) {
      try {
        // Axios를 사용하여 API 호출
        const response = await axios.post(`${SERVER_URL}/room/exists`, {
          user_list, // userList를 request body에 포함
        });

        // 응답값이 true일 때만 addChatRoom 호출
        if (!response.data.exists) {
          addChatRoom(userId, {
            /**
             * TODO: 전역 상태에 있는 닉네임 가져오도록 구현(게시글 내에서)
             */
            name: `타겟: ${targetId}`, // 타겟 닉네임
            otherUserId: targetId, // 타겟 아이디
          });
        } else {
          console.log("이미 존재하는 채팅방입니다.");
        }
        navigate("/chats");
      } catch (error) {
        console.error("채팅방 확인 중 오류 발생:", error);
      }
    }
  };

  return (
    <div style={{ padding: "100px" }} className="input-area">
      <input
        type="text"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
        placeholder="타겟 ID 입력"
      />
      <button onClick={(e) => handleClick(e)}>1:1문의</button>
    </div>
  );
};

export default TestChat;
