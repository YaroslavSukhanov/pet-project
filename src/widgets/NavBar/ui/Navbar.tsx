import React from 'react';
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className} : NavbarProps ) => {
    console.log(cls, 'cls');

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
        </div>
    );
};
