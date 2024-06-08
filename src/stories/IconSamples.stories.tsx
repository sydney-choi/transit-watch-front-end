import type { Meta, StoryObj } from '@storybook/react';
import { Icon, iconTypes } from '@/components/common/icon';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      rowGap: '20px',
      columnGap: '20px',
      padding: '20px',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    }}
  >
    {children}
  </div>
);

const Icons: React.ReactNode = (
  <>
    {iconTypes.map((icon) => (
      <Icon key={icon} icon={icon} size="24" />
    ))}
  </>
);

const meta = {
  title: 'components/common/IconSamples',
  component: IconWrapper,
  parameters: {
    componentSubtitle: '사용 아이콘 모음',
    controls: {
      exclude: ['children'],
    },
  },
} satisfies Meta<typeof IconWrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: Icons,
  },
};
