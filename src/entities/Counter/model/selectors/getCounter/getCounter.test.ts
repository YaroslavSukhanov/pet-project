import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { IStateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/deepPartial';

describe('getCounter', () => {
    it('should return the initial counter', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
    });
});
