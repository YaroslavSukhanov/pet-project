import { IStateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/deepPartial';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    it('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect(getLoginError(state as IStateSchema)).toEqual('error');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getLoginError(state as IStateSchema)).toEqual(undefined);
    });
});
