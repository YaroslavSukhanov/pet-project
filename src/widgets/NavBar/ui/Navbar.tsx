import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
    const { t } = useTranslation();

    const handleOpenModal = () => {
        setIsAuthModalOpen(!isAuthModalOpen);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={handleOpenModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Sign in')}
            </Button>
            { }
            <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)}>
                {/* eslint-disable-next-line */}
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </Modal>
        </div>
    );
}
