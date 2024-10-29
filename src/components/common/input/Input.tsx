import { InputWrapper, Label, StyledInput } from './Input.styles';

interface InputProps {
  /** 라벨 텍스트 */
  label: string;

  /** 플레이스홀더 텍스트 */
  placeholder?: string;

  /** 입력 필드의 현재 값 */
  value: string;

  /** 값 변경 시 호출되는 함수 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
