import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer, LogoContainer } from "./Header.styles";

import Logo from "../../common/Logo/Logo";
import NotificationIconContainer from "./NotificationIconContainer/NotificationIconContainer";
import ProfileImage from "../../common/ProfileImage/ProfileImage";
import NotificationIcon from "../../common/icon/NotificationIcon/NotificationIcon";
import ContactIcon from "../../common/icon/ContactIcon/ContactIcon";
import Button from "../../common/button/Button";
import ProfileDropdown from "../../features/profileDropdown/ProfileDropdown";

import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";

/**
 * 로그인 안 되 었을 때
 * 로그인 버튼 onClick 시 로그인 모달 띄우기
 *
 * 로그인 되었을 때 (각 요소들 버튼으로 만들기)
 * Chat Icon 클릭시 채팅 페이지로 이동
 * Notificatoin Icon 클릭시 알림 모달
 * Profile Image 클릭시 마이페이지로 이동
 */

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    console.log("toggleDropdown", isDropdownVisible);
    setIsDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  // 로그인 상태, notificationCount 등은 전역 상태 관리를 통해 관리할 예정
  const isLogin = true;

  // navigate 방식 Link 방식 다시 확인
  // const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 모달 띄우기
  };

  // const handleChat = () => {
  //   navigate("/chats");
  // };

  const handleNotification = () => {
    // 알림 모달 띄우기
  };

  // const handleMyPage = () => {
  //   navigate("/my-info");
  // };

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <h1>
              <Logo />
            </h1>
          </Link>
        </LogoContainer>
        {isLogin ? (
          <NavContainer>
            <Link to="/chats">
              <NotificationIconContainer notificationCount={1}>
                <ContactIcon />
              </NotificationIconContainer>
            </Link>
            <NotificationIconContainer
              notificationCount={1}
              onClick={handleNotification}
            >
              <NotificationIcon />
            </NotificationIconContainer>
            <button onClick={toggleDropdown}>
              <ProfileImage src={DummyProfileImage} usageType="header" />
            </button>
          </NavContainer>
        ) : (
          /**
           * TODO: 우선 Button 컴포넌트를 사용하고, 텍스트 색상, 버튼 height 같은 디테일한 css는 후반부에 수정
           */
          <Button
            buttonType="outline"
            buttonSize="small"
            label="로그인"
            onClick={handleLogin}
          />
        )}
      </HeaderContainer>
      {/**
       * TODO: dropdown 외부 클릭 시 dropdown 닫히는 기능 추가 고려
       */}
      <ProfileDropdown
        isVisible={isDropdownVisible}
        closeDropdown={closeDropdown}
      />
    </>
  );
};

export default Header;
