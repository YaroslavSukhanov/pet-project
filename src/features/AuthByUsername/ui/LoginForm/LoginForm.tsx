import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<ILoginFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginError);

    const handleOnChangeUsername = (inputUsername: string) => {
        dispatch(loginActions.setUsername(inputUsername));
    };

    const handleOnChangePassword = (inputPassword: string) => {
        dispatch(loginActions.setPassword(inputPassword));
    };

    const handleOnLoginClick = async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') onSuccess?.();
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
};

export default LoginForm;
