import React from "react";
import { TextAreaWrapper, Label, StyledTextArea } from "./ReadTextArea.styles";

interface ReadOnlyTextAreaProps {
  label: string;
  value: string;
}

const ReadOnlyTextArea: React.FC<ReadOnlyTextAreaProps> = ({
  label,
  value,
}) => {
  return (
    <TextAreaWrapper>
      <Label>{label}</Label>
      <StyledTextArea value={value} readOnly disabled />
    </TextAreaWrapper>
  );
};

export default ReadOnlyTextArea;
