import React from "react";
import { IconContainer, Badge } from "./NotificationIconContainer.styles";

interface NotificationIconContainerProps {
  children: React.ReactNode;
  notificationCount: number;
  onClick?: () => void;
}

const NotificationIconContainer: React.FC<NotificationIconContainerProps> = ({
  children,
  notificationCount = 0,
  onClick,
}) => {
  return (
    <IconContainer onClick={onClick}>
      {children}
      <Badge $notificationCount={notificationCount}>{notificationCount}</Badge>
    </IconContainer>
  );
};

export default NotificationIconContainer;
