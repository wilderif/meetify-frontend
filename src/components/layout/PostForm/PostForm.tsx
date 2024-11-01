import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePostForm } from "../../../utils/postValidation";
import Select from "../../common/CustomSelect/CustomSelect";
import Input from "../../common/input/Input";
import TextEditor from "../../common/TextEditor/TextEditor";
import Title from "../../common/Title/Title";
import Button from "../../common/button/Button";
import DatePicker from "../../features/DatePicker/DatePicker";
import { SelectOption } from "../../../types/types";
import {
  ParticipationMethodOptions,
  RecruitmentCapacityOptions,
  InterestsOptions,
  PositionOptions,
  DurationOptions,
} from "../../../constants/options";
import { FORM_TITLES, PLACEHOLDERS } from "../../../constants/PostForm";
import { PostFormData } from "../../../types/Post";
import {
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  PostFormContainer,
} from "./PostForm.styles";
import { Dayjs } from "dayjs";

interface PostFormProps {
  title: string;
  onSubmit: (data: PostFormData) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ title, onSubmit }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [participationMethod, setParticipationMethod] =
    useState<SelectOption | null>(null);
  const [recruitmentCapacity, setRecruitmentCapacity] =
    useState<SelectOption | null>(null);
  const [interests, setInterests] = useState<SelectOption[]>([]);
  const [position, setPosition] = useState<SelectOption | null>(null);
  const [duration, setDuration] = useState<SelectOption | null>(null);

  const handleSubmit = () => {
    const formData: PostFormData = {
      inputValue,
      content,
      selectedDate,
      participationMethod,
      recruitmentCapacity,
      interests,
      position,
      duration,
    };
    // 폼 검증 후 제출
    if (validatePostForm(formData)) {
      onSubmit(formData);
    }
  };
  // 취소 버튼 클릭 시 이전 페이지로 이동
  const handleCancel = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <PostFormContainer>
      <Section>
        <Title text={`${title} ${FORM_TITLES.POST_FORM}`} stepNumber={1} />
        <Row>
          <FormColumn>
            <Select
              label="진행 방식"
              options={ParticipationMethodOptions}
              placeholder={PLACEHOLDERS.PARTICIPATION_METHOD}
              onChange={(value) =>
                setParticipationMethod(value as SelectOption)
              }
              value={participationMethod}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="모집 인원"
              options={RecruitmentCapacityOptions}
              placeholder={PLACEHOLDERS.RECRUITMENT_CAPACITY}
              onChange={(value) =>
                setRecruitmentCapacity(value as SelectOption)
              }
              value={recruitmentCapacity}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="기술 스택"
              options={InterestsOptions}
              placeholder={PLACEHOLDERS.INTERESTS}
              onChange={(value) => setInterests(value as SelectOption[])}
              value={interests}
              isMulti={true}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="진행 기간"
              options={DurationOptions}
              placeholder={PLACEHOLDERS.DURATION}
              onChange={(value) => setDuration(value as SelectOption)}
              value={duration}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="모집 포지션"
              options={PositionOptions}
              placeholder={PLACEHOLDERS.POSITION}
              onChange={(value) => setPosition(value as SelectOption)}
              value={position}
            />
          </FormColumn>
          <FormColumn>
            <DatePicker
              label="모집 마감일"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </FormColumn>
        </Row>
      </Section>

      <Section>
        <Title text={FORM_TITLES.PROJECT_INTRO} stepNumber={2} />
        <Input
          label="제목"
          placeholder={PLACEHOLDERS.TITLE}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextEditor
          value={content}
          placeholder={PLACEHOLDERS.CONTENT}
          onChange={(value) => setContent(value)}
        />
      </Section>

      <ButtonWrapper>
        <Button
          buttonType="outline"
          buttonSize="medium"
          label="취소"
          onClick={handleCancel}
        />
        <Button
          buttonType="fill"
          buttonSize="medium"
          label="작성"
          onClick={handleSubmit}
        />
      </ButtonWrapper>
    </PostFormContainer>
  );
};

export default PostForm;
