import React from "react";
import styled from "styled-components";

// 알림 아이콘 스타일
const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 8px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

// 배지 스타일
const Badge = styled.span<{ count: number }>`
  position: absolute;
  top: -5px;
  right: -5px;
  display: ${({ count }) => (count > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

interface NotificationIconContainerProps {
  icon: React.ReactNode; // 아이콘 컴포넌트 (SVG나 이미지)
  notificationCount?: number; // 알림 개수
}

const NotificationIconContainer: React.FC<NotificationIconContainerProps> = ({
  icon,
  notificationCount = 0,
}) => {
  return (
    <IconContainer>
      {icon}
      <Badge count={notificationCount}>{notificationCount}</Badge>
    </IconContainer>
  );
};

export default NotificationIconContainer;
