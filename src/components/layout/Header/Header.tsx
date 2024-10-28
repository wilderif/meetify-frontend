import { HeaderContainer, NavContainer, LogoContainer } from "./Header.styles";

import Logo from "../../common/Logo/Logo";
import NotificationIconContainer from "./NotificationIconContainer/NotificationIconContainer";
import NotificationIcon from "../../common/icon/NotificationIcon/NotificationIcon";
import ContactIcon from "../../common/icon/ContactIcon/ContactIcon";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavContainer>
        <NotificationIconContainer>
          <NotificationIcon />
        </NotificationIconContainer>
        <NotificationIconContainer>
          <ContactIcon />
        </NotificationIconContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
