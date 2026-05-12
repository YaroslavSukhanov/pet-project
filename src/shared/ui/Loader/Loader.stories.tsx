import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Loader } from 'shared/ui/Loader/Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecoorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.Dark),
};
