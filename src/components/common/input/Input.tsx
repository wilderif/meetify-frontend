import { InputWrapper, Label, StyledInput } from './Input.styles';

interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
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
