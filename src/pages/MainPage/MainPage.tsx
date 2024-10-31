import { SelectOption } from "../../types/types";
import {
  CardContainer,
  CustomSelect,
  Pagination,
  SearchBar,
  WriteButton,
} from "../../components/common";
import {
  InterestsOptions,
  PositionOptions,
  RecruitmentCapacityOptions,
} from "../../constants/options";
import { MainBanner, MainTabs } from "../../components/features/Main";
import {
  FilterWrapper,
  CustomSelectWrapper,
  WriteButtonWrapper,
  SearchBarWrapper,
} from "./MainPage.styles";

const MainPage = () => {
  const handleSearch = (searchValue: string) => {};
  const handleSelectChange = (option: SelectOption | SelectOption[]) => {};
  const handlePageChange = (page: number) => {};

  return (
    <>
      <MainBanner />
      <MainTabs />
      <FilterWrapper>
        <CustomSelectWrapper>
          <CustomSelect
            label={"기술스택"}
            placeholder={"기술스택"}
            options={InterestsOptions}
            onChange={handleSelectChange}
            variant={"rounded"}
            isMulti={true}
          />
          <CustomSelect
            label={"포지션"}
            placeholder={"포지션"}
            options={PositionOptions}
            onChange={handleSelectChange}
            variant={"rounded"}
          />
          <CustomSelect
            label={"진행방식"}
            placeholder={"진행방식"}
            options={RecruitmentCapacityOptions}
            onChange={handleSelectChange}
            variant={"rounded"}
          />
        </CustomSelectWrapper>
        <SearchBarWrapper>
          <SearchBar onSearch={handleSearch} />
        </SearchBarWrapper>
      </FilterWrapper>
      <CardContainer />
      {/* 임시 */}
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={handlePageChange}
      />
      <WriteButtonWrapper>
        <WriteButton />
      </WriteButtonWrapper>
    </>
  );
};

export default MainPage;
