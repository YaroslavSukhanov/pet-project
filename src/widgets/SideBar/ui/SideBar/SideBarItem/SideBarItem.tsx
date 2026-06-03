import React, { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { IItem } from '../../../model/items';
import cls from './SideBarItem.module.scss';

interface ISideBarItemProps {
    item?: IItem;
    collapsed: boolean;
}

export const SideBarItem: FC<ISideBarItemProps> = memo<ISideBarItemProps>(({ item, collapsed }) => (
    <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
        {item.Icon}
        <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
));
