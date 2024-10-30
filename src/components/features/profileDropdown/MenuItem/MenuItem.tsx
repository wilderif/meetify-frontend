import React from "react";
import { ItemContainer, IconContainer } from "./MenuItem.styled";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => (
  <ItemContainer onClick={onClick}>
    <IconContainer>{icon}</IconContainer>
    {label}
  </ItemContainer>
);

export default MenuItem;
