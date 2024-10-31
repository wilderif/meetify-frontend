import React, { useState } from "react";
import {
  InputWrapper,
  Input,
  IconWrapper,
  ErrorMessage,
} from "../login/LoginModal.styles";
import EyeIcon from "../../common/icon/EyeIcon/EyeIcon";
import CloseEyeIcon from "../../common/icon/CloseEyeIcon/CloseEyeIcon";

interface InputWithIconProps {
  type: string;
  placeholder: string;
  iconType?: "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  errorMessage?: string;
  hasError?: boolean;
}

const InputWithIcon = ({
  type,
  placeholder,
  iconType,
  value,
  onChange,
  name,
  errorMessage,
}: InputWithIconProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = iconType === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    if (isPasswordType) {
      setShowPassword((prev) => !prev);
    }
  };

  return (
    <InputWrapper>
      {isPasswordType && (
        <IconWrapper onClick={togglePasswordVisibility}>
          {showPassword ? <EyeIcon /> : <CloseEyeIcon />}
        </IconWrapper>
      )}
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        hasIcon={isPasswordType}
        isError={!!errorMessage}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

export default InputWithIcon;
