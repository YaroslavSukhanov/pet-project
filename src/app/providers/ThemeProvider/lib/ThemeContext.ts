import { createContext } from 'react';

export enum Theme {
    Dark = 'app_dark_theme',
    Normal = 'app_normal_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.Normal });

export const LOCAL_STORAGE_THEME_KEY = 'theme';
