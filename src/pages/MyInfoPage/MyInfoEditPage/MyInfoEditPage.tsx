import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../../types/types";
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
  InterestsOptions,
  AffiliationOptions,
  PositionOptions,
} from "../../../constants/options";

import DummyProfileImage from "../../../assets/profile-image/dummy-profile-image.png";

/**
 * CustomSelect 컴포넌트의 width 값이 600px로 고정되어 있어,
 * 우선 MyInfoEditPageWrapper의 width 값을 600px로 설정하였습니다.
 *
 * TODO:
 * placeholder
 * - 사용자 정보 유무에 따라 default 값과 db의 값 선택하여 설정
 * - 전역 상태와 백앤드 로직 작업 후 수정
 *
 * 프로필 이미지 수정 기능, 수정 아이콘 추가
 *
 * Dropdown 컴포넌트의 프로필 눌렀을 때 navigate edit page로 변경
 *
 */
const MyInfoEditPage = () => {
  const [userInformation, setUserInformation] = useState({
    inputNickname: "",
    selectPosition: {} as SelectOption,
    selectAffiliation: {} as SelectOption,
    inputIntroduction: "",
    selectInterests: [] as SelectOption[],
  });

  const navigate = useNavigate();

  // console.log(userInformation);

  /**
   * TODO:
   * useEffect 내부에서 초기에 사용자 정보를 불러오는 함수 호출
   * db에 사용자 정보가 있다면 state에 저장
   */
  useEffect(() => {}, []);

  /**
   * TODO:
   * 사용자 정보 삭제 훅이나 api 사용
   * 로그인 전역 상태 초기화
   * 메인 페이지로 이동
   */
  const handleDeleteUser = () => {
    navigate("/");
  };

  /**
   * TODO:
   * state에 저장된 사용자 정보 백앤드로 전송 후 db에 저장
   * 프로필 확인 기능 추가된다면 프로필 페이지로 이동
   * 프로필 확인 기능 없다면 메인 페이지로 이동
   */
  const handleSaveProfile = () => {
    navigate("/");
  };

  // 닉네임, 자기소개 input 값 변경 시 state에 저장
  const handleInputChange = (
    inputType: "inputNickname" | "inputIntroduction"
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInformation((prevState) => {
        return {
          ...prevState,
          [inputType]: e.target.value,
        };
      });
    };
  };

  // 직무, 소속, 관심분야 select 값 변경 시 state에 저장
  const handleSelectChange = (
    selectType: "selectPosition" | "selectAffiliation" | "selectInterests"
  ) => {
    return (selectedOption: SelectOption | SelectOption[]) => {
      setUserInformation((prevState) => {
        {
          return {
            ...prevState,
            [selectType]:
              selectType === "selectInterests"
                ? (selectedOption as SelectOption[]).map((option) => option)
                : (selectedOption as SelectOption),
          };
        }
      });
    };
  };

  return (
    <MyInfoEditPageWrapper>
      <ProfileContainer>
        <ProfileImage
          src={DummyProfileImage}
          alt="user profile image"
          usageType="userInformation"
        />
        <div style={{ marginTop: "1rem" }}>User Name 님 환영해요.</div>
      </ProfileContainer>
      <Input
        label="닉네임"
        placeholder=""
        value={userInformation.inputNickname}
        onChange={handleInputChange("inputNickname")}
      />

      <CustomSelect
        label="직무"
        options={PositionOptions}
        placeholder=""
        onChange={handleSelectChange("selectPosition")}
        value={userInformation.selectPosition}
        isMulti={false}
        variant="default"
      />
      <CustomSelect
        label="소속"
        options={AffiliationOptions}
        placeholder=""
        onChange={handleSelectChange("selectAffiliation")}
        value={userInformation.selectAffiliation}
        isMulti={false}
        variant="default"
      />
      <TextArea
        label="자기소개"
        placeholder=""
        value={userInformation.inputIntroduction}
        onChange={handleInputChange("inputIntroduction")}
      />
      <CustomSelect
        label="관심분야"
        options={InterestsOptions}
        placeholder=""
        onChange={handleSelectChange("selectInterests")}
        value={userInformation.selectInterests}
        isMulti={true}
        variant="default"
      />
      <ButtonContainer>
        <Button
          label="회원 탈퇴"
          buttonType="outline"
          buttonSize="medium"
          onClick={handleDeleteUser}
        />
        <Button
          label="프로필 저장"
          buttonType="fill"
          buttonSize="medium"
          onClick={handleSaveProfile}
        />
      </ButtonContainer>
    </MyInfoEditPageWrapper>
  );
};

export default MyInfoEditPage;
