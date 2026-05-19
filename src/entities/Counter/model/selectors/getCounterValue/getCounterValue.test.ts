import { DeepPartial } from 'shared/types/deepPartial';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    it('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
