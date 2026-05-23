import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'placeholder',
        value: 'value',
        type: 'text',
    },
};
