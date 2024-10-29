import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const Template = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export const Default: StoryObj<typeof Pagination> = {
  render: Template,
  args: {
    totalPages: 5,
  },
};
