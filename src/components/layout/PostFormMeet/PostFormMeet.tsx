import { useState } from "react";
import Select from "../../common/CustomSelect/CustomSelect";
import Title from "../../common/Title/Title";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import TextEditor from "../../common/TextEditor/TextEditor";
import { SelectOption } from "../../../types/types";
import {
  ParticipationMethodOptions,
  AffiliationOptions,
  InterestsOptions,
  PositionOptions,
  AvailableTimeOptions,
} from "../../../constants/options";
import { FORM_TITLES, PLACEHOLDERS } from "../../../constants/PostForm";
import { PostMeetFormData } from "../../../types/Post";
import {
  Section,
  Row,
  FormColumn,
  ButtonWrapper,
  PostFormContainer,
} from "./PostFormMeet.styles";

interface PostFormProps {
  title: string;
  onSubmit: (data: PostMeetFormData) => void;
  onCancel: () => void;
}

const PostFormMeet: React.FC<PostFormProps> = ({ onSubmit, onCancel }) => {
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState<string>("");

  const [participationMethod, setParticipationMethod] =
    useState<SelectOption | null>(null);
  const [interests, setInterests] = useState<SelectOption[]>([]);
  const [affiliation, setAffiliation] = useState<SelectOption | null>(null);
  const [position, setPosition] = useState<SelectOption | null>(null);
  const [availableTime, setAvailableTime] = useState<SelectOption | null>(null);

  const handleSubmit = () => {
    const formData: PostMeetFormData = {
      inputValue,
      content,
      participationMethod,
      interests,
      affiliation,
      position,
      availableTime,
    };
    onSubmit(formData);
  };

  return (
    <PostFormContainer>
      <Section>
        <Title text={FORM_TITLES.POST_FORM_MEET} stepNumber={1} />
        <Row>
          <FormColumn>
            <Select
              label="선호 진행 방식"
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
              label="관심 분야"
              options={InterestsOptions}
              placeholder={PLACEHOLDERS.INTERESTS_MEET}
              onChange={(value) => setInterests(value as SelectOption[])}
              value={interests}
              isMulti={true}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="소속"
              options={AffiliationOptions}
              placeholder={PLACEHOLDERS.AFFILIATION}
              onChange={(value) => setAffiliation(value as SelectOption)}
              value={affiliation}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="직무"
              options={PositionOptions}
              placeholder={PLACEHOLDERS.POSITION}
              onChange={(value) => setPosition(value as SelectOption)}
              value={position}
            />
          </FormColumn>
          <FormColumn>
            <Select
              label="참여 가능 시간(주)"
              options={AvailableTimeOptions}
              placeholder={PLACEHOLDERS.AVAILABLE_TIME}
              onChange={(value) => setAvailableTime(value as SelectOption)}
              value={availableTime}
            />
          </FormColumn>
        </Row>
      </Section>

      <Section>
        <Title text={FORM_TITLES.MEET_INTRO} stepNumber={2} />
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
          onClick={onCancel}
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

export default PostFormMeet;
