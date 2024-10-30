import {
  ButtonContainer,
  MyInfoEditPageWrapper,
  ProfileContainer,
} from "./MyInfoEditPage.styled";
import ProfileImage from "../../../components/common/ProfileImage/ProfileImage";
import CustomSelect from "../../../components/common/CustomSelect/CustomSelect";
import Input from "../../../components/common/input/Input";
import TextArea from "../../../components/common/TextArea/TextArea";
import Button from "../../../components/common/button/Button";

import {
  기술스택 as interests,
  소속 as affiliation,
  모집포지션 as position,
} from "../../../constants/options";

import DummyProfileImage from "../../../assets/profile-image/dummy-profile-image.png";

/**
 * CustomSelect 컴포넌트의 width 값이 600px로 고정되어 있어,
 * 우선 MyInfoEditPageWrapper의 width 값을 600px로 설정하였습니다.
 *
 * placeholder
 * - 사용자 정보 유무에 따라 default 값과 db의 값 선택하여 설정
 *
 * Input, TextArea onChange 함수 작성해야 글이 적어짐
 * -> 공통적으로 사용할 함수 작성할 것
 *
 */
const MyInfoEditPage = () => {
  return (
    <MyInfoEditPageWrapper>
      <ProfileContainer>
        <ProfileImage
          src={DummyProfileImage}
          alt="user profile image"
          usageType="userInformation"
        />
        User Name 님 환영해요.
      </ProfileContainer>
      <Input label="닉네임" placeholder="" value="" onChange={() => {}} />

      <CustomSelect
        label="직무"
        options={position}
        placeholder=""
        onChange={() => {}}
        value={undefined}
        isMulti={false}
        variant="default"
      />
      <CustomSelect
        label="소속"
        options={affiliation}
        placeholder=""
        onChange={() => {}}
        value={undefined}
        isMulti={false}
        variant="default"
      />
      <TextArea label="자기소개" placeholder="" value="" onChange={() => {}} />
      <CustomSelect
        label="관심분야"
        options={interests}
        placeholder=""
        onChange={() => {}}
        value={undefined}
        isMulti={true}
        variant="default"
      />
      <ButtonContainer>
        <Button
          label="회원 탈퇴"
          buttonType="outline"
          buttonSize="medium"
          onClick={() => {}}
        />
        <Button
          label="프로필 저장"
          buttonType="fill"
          buttonSize="medium"
          onClick={() => {}}
        />
      </ButtonContainer>
    </MyInfoEditPageWrapper>
  );
};

export default MyInfoEditPage;
