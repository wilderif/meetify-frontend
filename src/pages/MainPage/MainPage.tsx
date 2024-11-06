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
} from "./MainPage.styles";
import useMainPage from "../../hooks/useMainPage";

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
      <CardContainer postList={postList} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
