/**
 * 리스트에서 지정된 개수만큼 슬라이스하는 함수
 * @param list - 원본 리스트
 * @param limit - 최대 슬라이스 개수
 * @returns Array - 슬라이스된 리스트
 */
export const sliceList = <T>(list: T[], limit: number): T[] => {
  return list.slice(0, limit);
};
