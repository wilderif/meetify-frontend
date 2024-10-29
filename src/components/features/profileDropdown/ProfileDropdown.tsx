import { DropdownContainer, Divider } from "./ProfileDropdown.styled";
import MenuItem from "./MenuItem/MenuItem";

import ProfileImage from "../../common/ProfileImage/ProfileImage";
import MyPageIcon from "../../common/icon/MyPageIcon/MyPageIcon";
import EmptyHeartIcon from "../../common/icon/EmptyHeartIcon/EmptyHeartIcon";
import MyPostIcon from "../../common/icon/MyPostIcon/MyPostIcon";
import LogoutIcon from "../../common/icon/LogoutIcon/LogoutIcon";

import DummyProfileImage from "../../../assets/profile-image/Dummy-Profile-Image.png";

interface DropdownProps {
  isVisible: boolean;
}

const ProfileDropdown: React.FC<DropdownProps> = ({ isVisible }) => {
  return (
    <DropdownContainer isVisible={isVisible}>
      <MenuItem
        icon={<ProfileImage src={DummyProfileImage} usageType="card" />}
        label="User Name"
        onClick={() => {}}
      />
      <Divider />
      <MenuItem icon={<MyPageIcon />} label="마이페이지" onClick={() => {}} />
      <MenuItem
        icon={<EmptyHeartIcon />}
        label="내 관심글 목록"
        onClick={() => {}}
      />
      <MenuItem
        icon={<MyPostIcon />}
        label="내 작성글 목록"
        onClick={() => {}}
      />
      <Divider />
      <MenuItem icon={<LogoutIcon />} label="Sign Out" onClick={() => {}} />
    </DropdownContainer>
  );
};

export default ProfileDropdown;
