import { SelectOption } from "../types/types";

// { key: label } 형식의 객체를 SelectOption[]으로 변환하는 함수
export const convertToSelectOptions = (
  obj: Record<string, string>
): SelectOption[] => {
  return Object.entries(obj).map(([key2, label]) => ({
    value: key2,
    label,
  }));
};
