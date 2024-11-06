import { FC, useState } from "react";
import { InputContainer, StyledInput } from "./SearchBar.styled";
import SearchIcon from "../icon/SearchIcon/SearchIcon";

interface SearchBarProps {
  placeholder?: string;
  // 검색 이벤트 콜백
  onSearch: (searchValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = "제목, 글 내용을 검색해보세요",
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키로 검색 실행
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <InputContainer>
      <SearchIcon />
      <StyledInput
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
};

export default SearchBar;
