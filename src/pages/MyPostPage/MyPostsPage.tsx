import { CardContainer, Pagination } from "../../components/common";
import { StyledMyPostsContainer } from "./MyPostsPage.styles";
import useMyPostsPage from "../../hooks/useMyPostsPage";

const MyPostsPage = () => {
  const { postList, currentPage, totalPage, handlePageChange } =
    useMyPostsPage();

  return (
    <StyledMyPostsContainer>
      <CardContainer postList={postList} />
      {postList && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        />
      )}
    </StyledMyPostsContainer>
  );
};

export default MyPostsPage;
