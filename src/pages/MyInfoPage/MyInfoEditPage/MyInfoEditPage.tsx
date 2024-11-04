import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  MyInfoEditPageWrapper,
  ProfileContainer,
} from "./MyInfoEditPage.styled";
import useAuthStore from "../../../store/useAuthStore";
import ProfileImage from "../../../components/common/ProfileImage/ProfileImage";
import CustomSelect from "../../../components/common/CustomSelect/CustomSelect";
import Input from "../../../components/common/input/Input";
import TextArea from "../../../components/common/TextArea/TextArea";
import Button from "../../../components/common/button/Button";
import { SelectOption } from "../../../types/types";
import {
  InterestsOptions,
  AffiliationOptions,
  PositionOptions,
} from "../../../constants/options";
import { fetchUserProfile } from "../../../services/userProfile/fetchUserProfile";
import { saveUserProfile } from "../../../services/userProfile/saveUserProfile";

import DummyProfileImage from "../../../assets/profile-image/dummy-profile-image.png";
import useAuthApi from "../../../hooks/useAuthApi";

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
 */
const MyInfoEditPage = () => {
  const loginEmail = useAuthStore((state) => state.email);
  const [userInformation, setUserInformation] = useState({
    inputNickname: "",
    selectPosition: {} as SelectOption,
    selectAffiliation: {} as SelectOption,
    inputIntroduction: "",
    selectInterests: [] as SelectOption[],
  });
  const navigate = useNavigate();

  const { deleteUser } = useAuthApi();

  /**
   * TODO:
   * useEffect 내부에서 초기에 사용자 정보를 불러오는 함수 호출
   * db에 사용자 정보가 있다면 state에 저장
   */
  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        if (!loginEmail) {
          throw new Error("로그인한 사용자 정보가 없습니다.");
        }

        const userProfileData = await fetchUserProfile(loginEmail);

        console.log("userProfileData", userProfileData);

        setUserInformation({
          inputNickname: userProfileData.nickname,
          selectPosition: PositionOptions.find(
            (option) =>
              (option.value as string).toUpperCase() ===
              userProfileData.position
          ) as SelectOption,
          selectAffiliation: AffiliationOptions.find(
            (option) =>
              (option.value as string).toUpperCase() ===
              userProfileData.affiliation
          ) as SelectOption,
          inputIntroduction: userProfileData.bio,
          selectInterests: InterestsOptions.filter((option) =>
            userProfileData.interests.includes(
              (option.value as string).toUpperCase()
            )
          ),
        });
      } catch (error) {
        console.error("프로필 불러오기 중 오류 발생:", error);
      }
    };

    fetchUserProfileData();
    console.log("userInformation", userInformation);
  }, []);

  /**
   * TODO:
   * 혜수님 로그인 전역 상태 초기화 작업 추가되면 테스트 다시
   */
  const handleDeleteUser = async () => {
    deleteUser(loginEmail);
    navigate("/");
  };

  /**
   * TODO:
   * 프로필 확인 기능 추가된다면 프로필 페이지로 이동
   * 프로필 확인 기능 없다면 메인 페이지로 이동
   */
  const handleSaveProfile = async () => {
    try {
      await saveUserProfile(
        loginEmail,
        userInformation.inputNickname,
        userInformation.selectPosition,
        userInformation.selectAffiliation,
        userInformation.inputIntroduction,
        userInformation.selectInterests
      );
      navigate("/");
    } catch (error) {
      console.error("프로필 저장 중 오류 발생:", error);
    }
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
            [selectType]: selectedOption as SelectOption,
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
        placeholder={
          userInformation.inputNickname
            ? userInformation.inputNickname
            : "닉네임을 입력해주세요."
        }
        value={userInformation.inputNickname}
        onChange={handleInputChange("inputNickname")}
      />

      <CustomSelect
        label="직무"
        options={PositionOptions}
        placeholder={
          userInformation.selectPosition
            ? userInformation.selectPosition.label
            : "직무를 선택해주세요."
        }
        onChange={handleSelectChange("selectPosition")}
        value={userInformation.selectPosition || null}
        isMulti={false}
        variant="default"
      />
      <CustomSelect
        label="소속"
        options={AffiliationOptions}
        placeholder={
          userInformation.selectAffiliation
            ? userInformation.selectAffiliation.label
            : "소속을 선택해주세요."
        }
        onChange={handleSelectChange("selectAffiliation")}
        value={userInformation.selectAffiliation || null}
        isMulti={false}
        variant="default"
      />
      <TextArea
        label="자기소개"
        placeholder={
          (console.log(
            "userInformation.inputIntroduction",
            userInformation.inputIntroduction
          ),
          userInformation.inputIntroduction
            ? userInformation.inputIntroduction
            : "자기소개를 입력해주세요.")
        }
        value={userInformation.inputIntroduction}
        onChange={handleInputChange("inputIntroduction")}
      />
      <CustomSelect
        label="관심분야"
        options={InterestsOptions}
        placeholder={
          userInformation.selectInterests.length > 0
            ? userInformation.selectInterests
                .map((option) => option.label)
                .join(", ")
            : "관심분야를 선택해주세요."
        }
        onChange={handleSelectChange("selectInterests")}
        value={userInformation.selectInterests || null}
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
