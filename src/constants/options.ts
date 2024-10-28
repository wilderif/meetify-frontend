import Interests from './Interests';
import Affiliation from './Affiliation';
import AvailableTime from './AvailableTime';
import Duration from './Duration';
import ParticipationMethod from './ParticipationMethod';
import Position from './Position';
import RecruitmentCapacity from './RecruitmentCapacity';
import { convertToSelectOptions } from '../utils/optionUtils';

// 각 상수를 SelectOption[] 형식으로 변환하여 내보내기
export const 기술스택 = convertToSelectOptions(Interests);
export const 소속 = convertToSelectOptions(Affiliation);
export const 참여가능시간 = convertToSelectOptions(AvailableTime);
export const 모집기간 = convertToSelectOptions(Duration);
export const 진행방식 = convertToSelectOptions(ParticipationMethod);
export const 모집포지션 = convertToSelectOptions(Position);
export const 모집인원 = convertToSelectOptions(RecruitmentCapacity);
