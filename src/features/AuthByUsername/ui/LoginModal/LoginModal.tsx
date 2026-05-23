import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { FC } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ isOpen, onClose }) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [])}>
        <LoginForm />
    </Modal>
);
