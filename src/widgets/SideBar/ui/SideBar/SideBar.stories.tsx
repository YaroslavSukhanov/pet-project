import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { SideBar } from 'widgets/SideBar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecoorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/SideBar',
    component: SideBar,
    tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {

    },
    decorators: ThemeDecorator(Theme.Dark),
};
