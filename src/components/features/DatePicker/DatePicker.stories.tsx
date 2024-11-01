import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DatePicker from "./DatePicker";
import dayjs, { Dayjs } from "dayjs";

const meta: Meta<typeof DatePicker> = {
  title: "Feature/DatePicker/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "DatePicker의 레이블 텍스트",
      defaultValue: "모집 마감일",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const Template = ({ label }: { label: string }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <DatePicker
      label={label}
      value={selectedDate}
      onChange={(newValue) => setSelectedDate(newValue)}
    />
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
