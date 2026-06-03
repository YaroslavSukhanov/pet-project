import React, { ReactElement } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from 'widgets/SideBar/ui/SideBar/SideBarItem/SideBarItem.module.scss';
import Home from 'shared/assets/icons/Home.svg';
import Profile from 'shared/assets/icons/Profile.svg';
import About from 'shared/assets/icons/About.svg';

export interface IItem {
    path: string;
    text: string;
    Icon: ReactElement<any, any>;
}

export const SideBarItems: IItem[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: <Home className={cls.icon} />,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: <About className={cls.icon} />,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: <Profile className={cls.icon} />,
    },
];
