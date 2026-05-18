import React, { FC, PropsWithChildren, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Normal;

interface IThemeProviderProps {
    initialTheme?: Theme;
    children?: React.ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
