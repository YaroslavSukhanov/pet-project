import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecoorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
    decorators: ThemeDecorator(Theme.Dark),
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    decorators: ThemeDecorator(Theme.Dark),
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
    decorators: ThemeDecorator(Theme.Dark),
};
