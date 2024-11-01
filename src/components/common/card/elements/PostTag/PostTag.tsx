import { StyledPostTag } from "./PostTag.styles";
import PostType from "./../../../../../constants/PostType";

interface PostTagProps {
  /** 모집유형 */
  postType: keyof typeof PostType;
}

const PostTag = ({ postType }: PostTagProps) => {
  return (
    <StyledPostTag $postType={postType}>{PostType[postType]}</StyledPostTag>
  );
};

export default PostTag;
