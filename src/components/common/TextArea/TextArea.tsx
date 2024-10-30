import React from 'react';
import { TextAreaWrapper, Label, StyledTextArea } from './TextArea.styles';

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <TextAreaWrapper>
      <Label>{label}</Label>
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
