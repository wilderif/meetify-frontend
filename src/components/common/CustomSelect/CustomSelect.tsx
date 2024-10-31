import Select from "react-select";
import { SelectOption } from "../../../types/types";
import { SelectWrapper, Label, StyledSelect } from "./CustomSelect.styles";

interface SelectProps {
  /** 라벨 */
  label: string;

  /** 선택 옵션 목록 */
  options: SelectOption[];

  /** 플레이스홀더 */
  placeholder?: string;

  /** 값 변경 시 호출되는 함수 */
  onChange: (value: SelectOption | SelectOption[]) => void;

  /** 선택된 값 */
  value?: SelectOption | SelectOption[];

  /** 다중 선택 여부 */
  isMulti?: boolean;

  /** 스타일 종류 - default: 글 작성 Select, rounded: 카테고리*/
  variant?: "default" | "rounded";
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
  value,
  isMulti,
  variant = "default", // 기본값은 default
}) => {
  return (
    <SelectWrapper>
      {/* 메인 카테고리에서 label 숨기기 */}
      {variant !== "rounded" && <Label>{label}</Label>}{" "}
      <StyledSelect $variant={variant}>
        <Select
          classNamePrefix="react--select"
          options={options}
          onChange={(selectedOption) => {
            onChange(selectedOption as SelectOption);
          }}
          placeholder={placeholder}
          value={value}
          isMulti={isMulti}
          theme={(theme) => {
            const colors =
              variant === "rounded"
                ? {
                    primary25: "var(--primary-color-gra-end)", // 선택 항목 호버 색상
                    primary75: "var(--primary-color-gra-end)", // 포커스된 상태에서 강조 테두리 색상
                    primary: "var(--primary-color-org)", // 기본 테두리 색상
                    neutral0: "var(--color-white)", //  배경 색상
                    neutral50: "#5D5D5D", //  placeholder 색상
                    neutral80: "var(--primary-color-org)", //  선택된 텍스트 색상
                  }
                : {
                    primary25: "var(--primary-color-gra-end)", //  선택 항목 호버 색상
                    primary: "var(--primary-color-org)", //  기본 테두리 색상
                    neutral0: "var(--color-white)", //  배경 색상
                    neutral50: "var(--bg-gray-light)", //  placeholder 색상
                    neutral80: "var(--font-color-dark)", //  선택된 텍스트 색상
                  };

            return {
              ...theme,
              colors: {
                ...theme.colors,
                ...colors,
              },
            };
          }}
        />
      </StyledSelect>
    </SelectWrapper>
  );
};

export default CustomSelect;
