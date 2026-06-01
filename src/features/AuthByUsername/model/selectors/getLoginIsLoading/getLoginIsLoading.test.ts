import { DeepPartial } from 'shared/types/deepPartial';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    it('should return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
    });
});
