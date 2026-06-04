import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_KEY } from 'shared/const/localStorage';
import { IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export interface ILoginByUsername {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = 'INCORRECT_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export const loginByUsername = createAsyncThunk<
    IUser,
    ILoginByUsername,
    IThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post('/login', authData);
            if (!response.data) {
                throw new Error('no response data');
            }

            localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            // if (axios.isAxiosError(error)) {
            //     return thunkAPI.rejectWithValue(
            //         error.response?.data?.message ?? 'unknown error',
            //     );
            // }
            return rejectWithValue(i18n.t('Incorrect username or password'));
        }
    },
);
