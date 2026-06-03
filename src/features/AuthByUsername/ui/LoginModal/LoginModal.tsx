import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { FC, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
// import cls from './LoginModal.module.scss';

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ isOpen, onClose }) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [])}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
