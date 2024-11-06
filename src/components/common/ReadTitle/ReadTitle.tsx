import React from "react";
import {
  TitleWrapper,
  IconWrapper,
  TitleText,
  AuthorInfo,
  ProfileImage,
  AuthorName,
  CreatedDate,
  Divider,
} from "./ReadTitle.styles";

interface ReadTitleProps {
  /** 제목 텍스트 */
  text: string;
  /** 아이콘 이미지 경로 */
  iconSrc: string;
  /** 작성자 이름 */
  author?: string;
  /** 작성자 프로필 이미지 경로 */
  authorImageSrc?: string;
  /** 작성 날짜 */
  createdAt?: string;
}

const ReadTitle: React.FC<ReadTitleProps> = ({
  text,
  iconSrc,
  author,
  authorImageSrc,
  createdAt,
}) => (
  <div>
    <TitleWrapper>
      <IconWrapper>
        <img src={iconSrc} alt="icon" />
      </IconWrapper>
      <TitleText>{text}</TitleText>
    </TitleWrapper>

    {/* 작성자 정보가 있을 때는 AuthorInfo 아래에 밑줄 */}
    {author || authorImageSrc || createdAt ? (
      <>
        <AuthorInfo>
          <ProfileImage src={authorImageSrc} alt={`${author}'s profile`} />
          <AuthorName>{author}</AuthorName>
          <CreatedDate>{createdAt}</CreatedDate>
        </AuthorInfo>
        <Divider />
      </>
    ) : (
      // 작성자 정보가 없을 때는 TitleWrapper 아래에 밑줄
      <Divider />
    )}
  </div>
);

export default ReadTitle;
