import { FC, ReactNode } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface ICounterProps {
    className?: string;
    children?: ReactNode;
}

export const Counter: FC<ICounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={handleIncrement}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-button" onClick={handleDecrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
