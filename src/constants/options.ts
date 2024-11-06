import {
  Interests,
  Affiliation,
  AvailableTime,
  Duration,
  ParticipationMethod,
  Position,
  RecruitmentCapacity,
} from "./";
import { convertToSelectOptions } from "../utils/optionUtils";

// 각 상수를 SelectOption[] 형식으로 변환하여 내보내기

// 기술스택
export const InterestsOptions = convertToSelectOptions(Interests);
// 소속
export const AffiliationOptions = convertToSelectOptions(Affiliation);
// 참여가능시간
export const AvailableTimeOptions = convertToSelectOptions(AvailableTime);
// 모집기간
export const DurationOptions = convertToSelectOptions(Duration);
// 진행방식
export const ParticipationMethodOptions =
  convertToSelectOptions(ParticipationMethod);
// 모집포지션
export const PositionOptions = convertToSelectOptions(Position);
// 모집인원
export const RecruitmentCapacityOptions =
  convertToSelectOptions(RecruitmentCapacity);
