import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';

const meta = {
  title: 'components/common/Button',
  component: Button,
  parameters: {
    componentSubtitle: '아이콘',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Icon icon="Bookmark" size="22" />,
  },
};
