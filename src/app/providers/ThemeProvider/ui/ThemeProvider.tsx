import React, { FC, PropsWithChildren, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Normal;

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);
    const defaultProps = useMemo(() => ({
        theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value= {defaultProps}>
            {children}
            </ThemeContext.Provider>
    );
};
