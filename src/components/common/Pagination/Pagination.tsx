import React from "react";
import {
  PaginationContainer,
  PageButton,
  ButtonWrapper,
  IconStyled,
  PrevIconComponent,
  NextIconComponent,
} from "./Pagination.styles";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  PrevIcon?: React.ElementType;
  NextIcon?: React.ElementType;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  PrevIcon = PrevIconComponent,
  NextIcon = NextIconComponent,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <ButtonWrapper>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IconStyled as={PrevIcon} />
        </PageButton>
      </ButtonWrapper>
      {Array.from({ length: totalPages }, (_, index) => (
        <ButtonWrapper key={index + 1}>
          <PageButton
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        </ButtonWrapper>
      ))}
      <ButtonWrapper>
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IconStyled as={NextIcon} />
        </PageButton>
      </ButtonWrapper>
    </PaginationContainer>
  );
};

export default Pagination;
