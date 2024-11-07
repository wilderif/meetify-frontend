import {
  CardContainer,
  CustomSelect,
  Pagination,
  SearchBar,
} from "../../components/common";
import {
  InterestsOptions,
  PositionOptions,
  ParticipationMethodOptions,
} from "../../constants/options";
import { MainBanner, MainTabs } from "../../components/features/Main";
import {
  FilterWrapper,
  CustomSelectWrapper,
  SearchBarWrapper,
  EmptyTextWrapper,
  EmptyBold,
  EmptyText,
} from "./MainPage.styles";
import useMainPage from "../../hooks/useMainPage";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";

const MainPage = () => {
  const {
    postList,
    currentPage,
    totalPage,
    handleTabChange,
    handleSearch,
    handleSelectChange,
    handlePageChange,
    selectPostType,
  } = useMainPage();

  if (!postList) return <LoadingSpinner />;

  return (
    <>
      <MainBanner />
      <MainTabs onTabChange={handleTabChange} activeTab={selectPostType} />
      <FilterWrapper>
        <CustomSelectWrapper>
          <CustomSelect
            label={"기술스택"}
            placeholder={"기술스택"}
            options={InterestsOptions}
            onChange={(option) => handleSelectChange(option, "interests")}
            variant={"rounded"}
            isMulti={true}
          />
          <CustomSelect
            label={"포지션"}
            placeholder={"포지션"}
            options={PositionOptions}
            onChange={(option) => handleSelectChange(option, "position")}
            variant={"rounded"}
          />
          <CustomSelect
            label={"진행방식"}
            placeholder={"진행방식"}
            options={ParticipationMethodOptions}
            onChange={(option) =>
              handleSelectChange(option, "participationMethod")
            }
            variant={"rounded"}
          />
        </CustomSelectWrapper>
        <SearchBarWrapper>
          <SearchBar onSearch={handleSearch} />
        </SearchBarWrapper>
      </FilterWrapper>
      {postList && postList.length > 0 ? (
        <>
          <CardContainer postList={postList} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyTextWrapper>
          <EmptyBold>데이터가 없습니다.</EmptyBold>
          <EmptyText>
            원하시는 데이터를 찾을 수 없습니다.
            <br />
            검색 조건을 변경하거나, 다시 시도해주세요.
          </EmptyText>
        </EmptyTextWrapper>
      )}
    </>
  );
};

export default MainPage;
