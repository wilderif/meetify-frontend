import { Dayjs } from "dayjs";
import { SelectOption } from "./types";

export interface PostFormData {
  inputValue: string; // 제목
  content: string; // 내용
  selectedDate: Dayjs | null; // 모집 마감일
  participationMethod?: SelectOption | null; // 진행 방식
  recruitmentCapacity?: SelectOption | null; // 모집 인원
  interests?: SelectOption[]; // 기술 스택 (다중 선택)
  position?: SelectOption | null; // 모집 포지션
  duration?: SelectOption | null; // 진행 기간
}

export interface PostMeetFormData {
  inputValue: string; // 제목
  content: string; // 내용
  participationMethod?: SelectOption | null; // 선호 진행 방식
  affiliation?: SelectOption | null; // 소속
  interests?: SelectOption[]; // 관심 분야 (다중 선택)
  position?: SelectOption | null; // 직무
  availableTime?: SelectOption | null; // 참여 가능 시간
}
