import React from "react";
import { StyledProfileImage } from "./ProfileImage.styled";

interface ProfileImageProps {
  src: string;
  alt?: string;
  usageType: "header" | "userInformation" | "post" | "card";
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = "profile image",
  usageType,
}) => {
  return <StyledProfileImage src={src} alt={alt} usageType={usageType} />;
};

export default ProfileImage;
