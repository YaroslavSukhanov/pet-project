import { counterReducer, ICounterSchema } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice', () => {
    it('decrements', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    it('increments', () => {
        const state: ICounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    it('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
