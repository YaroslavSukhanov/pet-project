import { lazy } from "react";

export const MainPageAsync = lazy(() =>
    new Promise((resolve) =>
        setTimeout(() =>
            import('./MainPage'), 1500)));
