import React from "react";
import { IconContainer, Badge } from "./NotificationIconContainer.styles";

interface NotificationIconContainerProps {
  children: React.ReactNode;
  notificationCount: number;
}

const NotificationIconContainer: React.FC<NotificationIconContainerProps> = ({
  children,
  notificationCount = 0,
}) => {
  return (
    <IconContainer>
      {children}
      <Badge notificationCount={notificationCount}>{notificationCount}</Badge>
    </IconContainer>
  );
};

export default NotificationIconContainer;
