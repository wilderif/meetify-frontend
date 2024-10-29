import React, { useState } from "react";
import { InputWrapper, Input, IconWrapper } from "../login/LoginModal.styles";
import EyeIcon from "../../common/icon/EyeIcon/EyeIcon";
import CloseEyeIcon from "../../common/icon/CloseEyeIcon/CloseEyeIcon";

interface InputWithIconProps {
  type: string;
  placeholder: string;
  iconType?: "password";
}

const InputWithIcon = ({ type, placeholder, iconType }: InputWithIconProps) => {
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
        hasIcon={isPasswordType}
      />
    </InputWrapper>
  );
};

export default InputWithIcon;
