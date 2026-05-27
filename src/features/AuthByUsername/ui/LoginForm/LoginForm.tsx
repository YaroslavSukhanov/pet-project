import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useAppSelector(getLoginState);

    const handleOnChangeUsername = (inputUsername: string) => {
        dispatch(loginActions.setUsername(inputUsername));
    };

    const handleOnChangePassword = (inputPassword: string) => {
        dispatch(loginActions.setPassword(inputPassword));
    };

    const handleOnLoginClick = () => {
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <div className={classNames(cls.loginForm, {}, [])}>
            <Text title={t('Authorization')} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Type username')}
                autoFocus
                onChange={handleOnChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Type password')}
                onChange={handleOnChangePassword}
                value={password}
            />
            <Button
                onClick={handleOnLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginButton}
                disabled={isLoading}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
};
