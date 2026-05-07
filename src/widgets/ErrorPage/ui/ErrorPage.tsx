import * as React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface IErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<IErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = (): void => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};
