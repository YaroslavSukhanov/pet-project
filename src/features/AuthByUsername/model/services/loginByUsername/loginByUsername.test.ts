import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
    it('successful login', async () => {
        const userData = {
            username: 'username',
            password: 'password',
            id: 3,
        };
        mockedAxios.post.mockReturnValueOnce(
            Promise.resolve({ data: userData }),
        );

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: 'password' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    it('unsuccessful login', async () => {
        mockedAxios.post.mockReturnValueOnce(
            Promise.resolve({ status: 403 }),
        );

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: 'password' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Incorrect username or password');
    });
});
