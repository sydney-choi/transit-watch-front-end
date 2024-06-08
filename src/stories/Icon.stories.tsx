import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/components/common/icon';

const meta = {
  title: 'components/common/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: '아이콘',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'Bookmark',
  },
};

export const CustomSize50px: Story = {
  args: {
    icon: 'Bookmark',
    size: '50px',
  },
};

export const CustomSize4rem: Story = {
  args: {
    icon: 'Bookmark',
    size: '4rem',
  },
};

export const CustomColor: Story = {
  args: {
    icon: 'Bookmark',
    color: '#FF00FF',
  },
};
