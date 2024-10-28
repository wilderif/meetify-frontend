import styled from "styled-components";

interface ProfileImageProps {
  usageType: "header" | "userInformation" | "post";
}

const sizeMap = {
  header: "60px",
  userInformation: "200px",
  post: "50px",
};

export const StyledProfileImage = styled.img<ProfileImageProps>`
  width: ${({ usageType }) => sizeMap[usageType]};
  height: ${({ usageType }) => sizeMap[usageType]};
  border-radius: 50%;
  object-fit: cover;
`;
