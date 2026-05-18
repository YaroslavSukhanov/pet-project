import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line @stylistic/max-len
        children: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum\n',
        isOpen: true,
    },
};
