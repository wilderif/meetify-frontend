import {
  DropdownContainer,
  Divider,
  ProfileContainer,
  ProfileImageContainer,
} from "./ProfileDropdown.styled";
import MenuItem from "./MenuItem/MenuItem";

import ProfileImage from "../../common/ProfileImage/ProfileImage";
import MyPageIcon from "../../common/icon/MyPageIcon/MyPageIcon";
import EmptyHeartIcon from "../../common/icon/EmptyHeartIcon/EmptyHeartIcon";
import MyPostIcon from "../../common/icon/MyPostIcon/MyPostIcon";
import LogoutIcon from "../../common/icon/LogoutIcon/LogoutIcon";

import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";
import { useNavigate } from "react-router-dom";

interface DropdownProps {
  isVisible: boolean;
  closeDropdown: () => void;
}

const ProfileDropdown: React.FC<DropdownProps> = ({
  isVisible,
  closeDropdown,
}) => {
  const navigate = useNavigate();

  const handleClickMyPage = () => {
    closeDropdown();
    navigate("/my-info");
  };

  const handleClickMyLike = () => {
    closeDropdown();
    navigate("/my-like");
  };

  const handleClickMyPost = () => {
    closeDropdown();
    navigate("/my-posts");
  };

  const handleClickSignOut = () => {
    // 로그아웃 처리 훅 혜수님 작업 완료되면 연결
    closeDropdown();
    navigate("/");
  };

  return (
    <DropdownContainer isVisible={isVisible}>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={DummyProfileImage} usageType="card" />
        </ProfileImageContainer>
        User Name
      </ProfileContainer>
      <Divider />
      <MenuItem
        icon={<MyPageIcon />}
        label="마이페이지"
        onClick={handleClickMyPage}
      />
      <MenuItem
        icon={<EmptyHeartIcon />}
        label="내 관심글 목록"
        onClick={handleClickMyLike}
      />
      <MenuItem
        icon={<MyPostIcon />}
        label="내 작성글 목록"
        onClick={handleClickMyPost}
      />
      <Divider />
      <MenuItem
        icon={<LogoutIcon />}
        label="Sign Out"
        onClick={handleClickSignOut}
      />
    </DropdownContainer>
  );
};

export default ProfileDropdown;
