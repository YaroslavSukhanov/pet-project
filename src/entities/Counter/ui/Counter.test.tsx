import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from 'entities/Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    test('test render', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

        await userEvent.click(screen.getByTestId('increment-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

        await userEvent.click(screen.getByTestId('decrement-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
