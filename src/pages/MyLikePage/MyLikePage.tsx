import { CardContainer, Pagination } from "../../components/common";
import { StyledMyLikeContainer } from "./MyLikePage.styles";
import useMyLikePage from "../../hooks/useMyLikePage";

const MyLikePage = () => {
  const { postList, currentPage, totalPage, handlePageChange } =
    useMyLikePage(true);

  return (
    <StyledMyLikeContainer>
      <CardContainer postList={postList} />
      {postList && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        />
      )}
    </StyledMyLikeContainer>
  );
};

export default MyLikePage;
