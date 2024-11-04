import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  StyledDatePicker,
  DatePickerWrapper,
  Label,
} from "./DatePicker.styles";
import { Dayjs } from "dayjs";

interface DatePickerProps {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerWrapper>
        <Label>{label}</Label>
        <StyledDatePicker
          format="YYYY-MM-DD"
          showDaysOutsideCurrentMonth
          value={value}
          onChange={onChange}
        />
      </DatePickerWrapper>
    </LocalizationProvider>
  );
};

export default DatePicker;
