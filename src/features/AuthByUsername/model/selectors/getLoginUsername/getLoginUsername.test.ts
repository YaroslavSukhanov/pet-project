import { DeepPartial } from 'shared/types/deepPartial';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    it('should return password', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'username',
            },
        };

        expect(getLoginUsername(state as IStateSchema)).toEqual('username');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getLoginUsername(state as IStateSchema)).toEqual('');
    });
});
