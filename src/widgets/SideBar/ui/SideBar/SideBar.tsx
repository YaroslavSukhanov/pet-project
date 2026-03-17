import React, { FC, useState } from 'react';
import cls from './SideBar.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    console.log(cls, 'cls')

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggleCollapse}>toogle Side Bar</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
