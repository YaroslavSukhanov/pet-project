import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderComponent(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderComponent(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
