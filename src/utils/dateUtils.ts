/**
 * 날짜를 YYYY.MM.DD 형식으로 포맷팅하는 함수
 * @param date - Date 객체
 * @returns string - 포맷팅된 날짜 문자열
 */
export const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\.$/, "");
};

/**
 * 주어진 날짜가 오늘인지 확인하는 함수
 * @param date - Date 객체
 * @returns boolean - 오늘 날짜 여부 (true/false)
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return formatDate(date) === formatDate(today);
};
