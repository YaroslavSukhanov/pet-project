import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecoorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.Dark),
};
