import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface IRenderComponentOptions {
    route?: string;
}

export function renderComponent(
    component: React.ReactElement,
    options: IRenderComponentOptions = {},
): RenderResult {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
