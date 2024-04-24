import type { Meta, StoryObj } from '@storybook/react';

import { StationCard } from '@/components/map/StationCard';

const meta = {
  title: 'Example/StationCard',
  component: StationCard,
} satisfies Meta<typeof StationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ref: () => {},
    arsId: '1234',
    onClick: () => {},
  },
};
