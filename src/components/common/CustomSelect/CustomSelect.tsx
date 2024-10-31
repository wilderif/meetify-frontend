import Select, { MultiValueProps } from 'react-select';
import { SelectOption } from '../../../types/types';
import {
  SelectWrapper,
  Label,
  StyledSelect,
  MultiValueContainer,
} from './CustomSelect.styles';

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

  /** 스타일 종류 - default: 글 작성 Select, rounded: 카테고리 */
  variant?: 'default' | 'rounded';
}

// MultiValue값 쉼표로 구분하여 한 줄로 표시
const CustomMultiValue: React.FC<MultiValueProps<SelectOption>> = (props) => {
  const { index, data, selectProps } = props; // index: 현재 항목의 인덱스, data: 선택된 항목의 데이터 객체, selectProps: Select 컴포넌트의 props
  const isLast = index === (selectProps.value as SelectOption[]).length - 1; //마지막 항목이면 쉼표 없음

  return (
    <MultiValueContainer>
      {data.label}
      {!isLast && ', '}
    </MultiValueContainer>
  );
};

const CustomSelect: React.FC<SelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
  value,
  isMulti,
  variant = 'default', // 기본값은 default
}) => {
  return (
    <SelectWrapper>
      {/* 메인 카테고리에서 label 숨기기 */}
      {variant !== 'rounded' && <Label>{label}</Label>}
      <StyledSelect $variant={variant}>
        <Select
          classNamePrefix="react--select"
          options={options}
          onChange={(selectedOption) => {
            onChange(selectedOption as SelectOption | SelectOption[]);
          }}
          placeholder={placeholder}
          value={value}
          isMulti={isMulti}
          /* react-select에서 components를 사용하여 기본 멀티 컴포넌트를 커스텀으로 대체 가능*/
          components={
            variant === 'rounded' ? { MultiValue: CustomMultiValue } : undefined
          }
          theme={(theme) => {
            const colors =
              variant === 'rounded'
                ? {
                    primary25: 'var(--primary-color-gra-end)', // 선택 항목 호버 색상
                    primary75: 'var(--primary-color-gra-end)', // 포커스된 상태에서 강조 테두리 색상
                    primary: 'var(--primary-color-org)', // 기본 테두리 색상
                    neutral0: 'var(--color-white)', // 배경 색상
                    neutral50: '#5D5D5D', // placeholder 색상
                    neutral80: 'var(--primary-color-org)', // 선택된 텍스트 색상
                  }
                : {
                    primary25: 'var(--primary-color-gra-end)', // 선택 항목 호버 색상
                    primary: 'var(--primary-color-org)', // 기본 테두리 색상
                    neutral0: 'var(--color-white)', // 배경 색상
                    neutral50: 'var(--bg-gray-light)', // placeholder 색상
                    neutral80: 'var(--font-color-dark)', // 선택된 텍스트 색상
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
