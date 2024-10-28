import styled from "styled-components";

interface NotificationIconContainerProps {
  children: React.ReactNode;
  notificationCount: number;
}

export const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--bg-gray-light);
  border-radius: 50%;
  font-size: 24px;
`;

export const Badge = styled.span<NotificationIconContainerProps>`
  position: absolute;
  top: -3px;
  right: -3px;
  display: ${({ notificationCount }) =>
    notificationCount > 0 ? "flex" : "none"};
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
