import styled, { css } from "styled-components";
import PostType from "../../../../constants/PostType";

interface StyledPostTagProps {
  postType: keyof typeof PostType;
}

export const StyledPostTag = styled.span<StyledPostTagProps>`
  padding: 4px 16px;
  border-radius: 30px;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-bold);

  ${({ postType }) =>
    postType === "PROJECT"
      ? css`
          background-color: var(--bg-gray-light);
          color: var(--font-color-light);
        `
      : postType === "STUDY"
      ? css`
          background-color: var(--bg-coral-light);
          color: var(--color-rose);
        `
      : css`
          background-color: var(--primary-color-org-light);
          color: var(--primary-color-org);
        `}
`;
