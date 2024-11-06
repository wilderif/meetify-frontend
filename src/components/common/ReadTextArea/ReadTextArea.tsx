import React from "react";
import { TextAreaWrapper, Label, StyledTextArea } from "./ReadTextArea.styles";

interface ReadOnlyTextAreaProps {
  label: string;
  value: string;
  variant?: "placeholder" | "default";
}

const ReadOnlyTextArea: React.FC<ReadOnlyTextAreaProps> = ({
  label,
  value,
  variant = "default",
}) => {
  return (
    <TextAreaWrapper>
      <Label>{label}</Label>
      <StyledTextArea value={value} readOnly disabled $variant={variant} />
    </TextAreaWrapper>
  );
};

export default ReadOnlyTextArea;
