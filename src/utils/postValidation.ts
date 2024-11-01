import { toast } from "react-toastify";
import { PostFormMeetData } from "../types/Post";
import { PostFormData } from "../types/Post";
import dayjs from "dayjs";

export const validatePostForm = (formData: PostFormData): boolean => {
  if (!formData.participationMethod) {
    toast.error("진행 방식을 선택해 주세요.");
    return false;
  }
  if (!formData.recruitmentCapacity) {
    toast.error("모집 인원을 선택해 주세요.");
    return false;
  }
  if (formData.interests.length === 0) {
    toast.error("기술 스택을 선택해 주세요.");
    return false;
  }
  if (!formData.duration) {
    toast.error("진행 기간을 선택해 주세요.");
    return false;
  }
  if (!formData.position) {
    toast.error("모집 포지션을 선택해 주세요.");
    return false;
  }
  if (!formData.selectedDate) {
    toast.error("모집 마감일을 선택해 주세요.");
    return false;
  }
  if (!dayjs(formData.selectedDate).isValid()) {
    toast.error("유효한 날짜를 입력해 주세요.");
    return false;
  }
  if (dayjs(formData.selectedDate).isBefore(dayjs(), "day")) {
    toast.error("마감일은 오늘 이후로 설정해 주세요.");
    return false;
  }

  if (!formData.inputValue) {
    toast.error("제목을 입력해 주세요.");
    return false;
  }
  if (!formData.content) {
    toast.error("내용을 입력해 주세요.");
    return false;
  }
  return true;
};

export const validatePostFormMeet = (formData: PostFormMeetData): boolean => {
  if (!formData.participationMethod) {
    toast.error("선호 진행 방식을 선택해 주세요.");
    return false;
  }
  if (formData.interests.length === 0) {
    toast.error("관심 분야를 선택해 주세요.");
    return false;
  }
  if (!formData.affiliation) {
    toast.error("소속을 선택해 주세요.");
    return false;
  }
  if (!formData.position) {
    toast.error("직무를 선택해 주세요.");
    return false;
  }
  if (!formData.availableTime) {
    toast.error("참여 가능 시간(주)을 선택해 주세요.");
    return false;
  }
  if (!formData.inputValue) {
    toast.error("제목을 입력해 주세요.");
    return false;
  }
  if (!formData.content) {
    toast.error("내용을 입력해 주세요.");
    return false;
  }
  return true;
};
