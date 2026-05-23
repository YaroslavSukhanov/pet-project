import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [])}>
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Type username')}
                autoFocus
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Type password')}
            />
            <Button className={cls.loginButton}>{t('Sign in')}</Button>
        </div>
    );
};
