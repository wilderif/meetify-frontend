import { PostFormData, PostFormMeetData } from "../../types/Post";
import useAuthStore from "../../store/useAuthStore";

export const preparePostData = (postData: PostFormData, type: string) => {
  const userEmail = useAuthStore.getState().email;

  const recruitmentCapacity =
    typeof postData.recruitmentCapacity?.value === "string"
      ? parseInt(postData.recruitmentCapacity.value as string, 10)
      : undefined;

  return {
    title: postData.inputValue,
    content: postData.content,
    type, // "PROJECT", "STUDY", or "MEET"에 따라 동적으로 설정
    participation_method: postData.participationMethod?.value || undefined,
    recruitment_capacity: recruitmentCapacity || undefined,
    position: postData.position.map((position) => position.value),
    duration: postData.duration?.value || undefined,
    interests: postData.interests.map((interest) => interest.value),
    recruitment_deadline: postData.selectedDate
      ? postData.selectedDate.toISOString()
      : undefined,
    user_id: userEmail,
  };
};

export const preparePostDataMeet = (
  postData: PostFormMeetData,
  type: string
) => {
  const userEmail = useAuthStore.getState().email;

  return {
    title: postData.inputValue,
    content: postData.content,
    type, // "PROJECT", "STUDY", or "MEET"에 따라 동적으로 설정
    participation_method: postData.participationMethod?.value || undefined,
    position: postData.position.map((position) => position.value),
    interests: postData.interests.map((interest) => interest.value),
    affiliation: postData.affiliation?.value || undefined,
    available_time: postData.availableTime?.value || undefined,
    user_id: userEmail,
  };
};
