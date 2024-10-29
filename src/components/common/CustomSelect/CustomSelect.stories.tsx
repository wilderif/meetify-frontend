import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from './CustomSelect';
import {
  진행방식 as participationmethod,
  모집기간 as duration,
  기술스택 as interests,
  모집인원 as recruitmentcapacity,
  모집포지션 as position,
  소속 as affiliation,
  참여가능시간 as availabletime,
} from '../../../constants/options';

const meta: Meta<typeof CustomSelect> = {
  title: 'Common/select/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],

  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      return (
        <Story
          args={{
            ...context.args,
            value,
            onChange: (selectedOption) => setValue(selectedOption),
          }}
        />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 진행방식: Story = {
  args: {
    label: '진행 방식',
    placeholder: '온라인 / 오프라인 ',
    options: participationmethod,
    isMulti: false,
  },
};

export const 모집기간: Story = {
  args: {
    label: '진행 기간 선택',
    placeholder: '기간 미정 ~ 6개월 이상',
    options: duration,
    isMulti: false,
  },
};

export const 관심분야: Story = {
  args: {
    label: '기술 스택 선택',
    placeholder: '프로젝트 사용 스택',
    options: interests,
    isMulti: true,
  },
};

export const 모집인원: Story = {
  args: {
    label: '모집 인원 선택',
    placeholder: '인원 미정 ~ 10명 이상',
    options: recruitmentcapacity,
    isMulti: false,
  },
};

export const 모집포지션: Story = {
  args: {
    label: '모집 포지션 선택',
    placeholder: '프론트엔드, 백엔드, 풀스택...',
    options: position,
    isMulti: false,
  },
};

export const 소속: Story = {
  args: {
    label: '소속 선택',
    placeholder: '학생, 직장인, 프리랜서, 취업 준비생',
    options: affiliation,
    isMulti: false,
  },
};

export const 참여가능시간: Story = {
  args: {
    label: '참여 가능 시간 선택',
    placeholder: '주 5시간 미만 / 주 5시간 이상...',
    options: availabletime,
    isMulti: false,
  },
};

export const 카테고리기술스택: Story = {
  args: {
    label: '',
    placeholder: '기술 스택',
    options: interests,
    isMulti: false,
    variant: 'rounded',
  },
};
export const 카테고리포지션: Story = {
  args: {
    label: '',
    placeholder: '포지션',
    options: position,
    variant: 'rounded',
  },
};
export const 카테고리진행방식: Story = {
  args: {
    label: '',
    placeholder: '진행 방식',
    options: participationmethod,
    variant: 'rounded',
  },
};
