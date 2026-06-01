import { ILoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from 'shared/types/deepPartial';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    it('test set username', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: 'username',
        };

        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('123123')))
            .toEqual({ username: '123123' });
    });

    it('test set password', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: 'password',
        };

        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('password2')))
            .toEqual({ password: 'password2' });
    });
});
