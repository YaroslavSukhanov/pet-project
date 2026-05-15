import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links} />
        </div>
    );
}
