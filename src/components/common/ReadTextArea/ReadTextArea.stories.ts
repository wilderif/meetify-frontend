import type { Meta, StoryObj } from "@storybook/react";
import ReadTextArea from "./ReadTextArea";

const meta: Meta<typeof ReadTextArea> = {
  title: "Common/ReadTextArea/ReadTextArea",
  component: ReadTextArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "자기 소개",
    value: `안녕하세요 안녕안녕`,
  },
};

export const LongText: Story = {
  args: {
    label: "소개 내용",
    value: `후불제 소개팅으로 현재도 500명 이상의 활성화 유저들을 상대로 서비스를 제공하고 있습니다! 
    앱으로 출시하기 위해 함께 만들어 나갈 프론트엔드 개발자분을 모십니다! 

    자격 요건
    - 컴퓨터 관련 전공자 또는 그에 상응하는 지식을 보유하신 분
    - 형상 관리 툴(Git, Github 등)을 활용한 소스 관리 경험이 있는 분

    ### 기술 스택
    - 코어: React, Typescript
    - 상태 관리: Redux
    - UI 라이브러리 : MUI
    - CI/CD: GitHub, Github Actions, ArgoCD`,
  },
};
