import React, { FC } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
    getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const data = useAppSelector(getProfileData);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profileCard, { }, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button className={cls.editButton} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    type="text"
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    type="text"
                    value={data?.lastName}
                    placeholder={t('Your surname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
