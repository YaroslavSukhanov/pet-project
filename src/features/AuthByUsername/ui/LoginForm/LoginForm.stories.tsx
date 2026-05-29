import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Error: Story = {
    args: {},
    decorators: StoreDecorator({
        loginForm: {
            error: 'ERROR',
            username: 'username',
            password: 'password',
        },
    }),
};
