import { DeepPartial } from 'shared/types/deepPartial';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    it('should return password', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: 'Type password',
            },
        };

        expect(getLoginPassword(state as IStateSchema)).toEqual('Type password');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};

        expect(getLoginPassword(state as IStateSchema)).toEqual('');
    });
});
