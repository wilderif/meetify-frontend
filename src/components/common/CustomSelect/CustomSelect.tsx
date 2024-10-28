import Select from 'react-select';
import { SelectOption } from '../../../types/types';
import { SelectWrapper, Label, StyledSelect } from './CustomSelect.styles';

interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: SelectOption) => void;
  value?: SelectOption;
  isMulti?: boolean;
}

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
  value,
  isMulti,
}) => {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <StyledSelect>
        <Select
          classNamePrefix="react-select"
          options={options}
          onChange={(selectedOption) => {
            onChange(selectedOption as SelectOption);
          }}
          placeholder={placeholder}
          value={value}
          isMulti={isMulti}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'var(--primary-color-gra-end)', // 선택 항목 호버 색상
              primary: 'var(--primary-color-org)', // 기본 테두리 색상
              neutral0: 'var(--color-white)', // 배경 색상
              neutral50: 'var(--bg-gray-light)', // placeholder 색상
              neutral80: 'var(--font-color-dark)', // 선택된 텍스트 색상
            },
          })}
        />
      </StyledSelect>
    </SelectWrapper>
  );
};

export default CustomSelect;
