import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecoorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.Dark),
};
