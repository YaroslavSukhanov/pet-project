import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
    const { t } = useTranslation();

    const handleOpenModal = () => {
        setIsAuthModalOpen(true);
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
            <LoginModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </div>
    );
}
