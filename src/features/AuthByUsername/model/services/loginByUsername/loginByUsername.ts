import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_KEY } from 'shared/const/localStorage';

interface ILoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, { rejectValue: string }
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('no response data');
            }

            localStorage.setItem(USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            // if (axios.isAxiosError(error)) {
            //     return thunkAPI.rejectWithValue(
            //         error.response?.data?.message ?? 'unknown error',
            //     );
            // }
            return thunkAPI.rejectWithValue(i18n.t('Incorrect username or password'));
        }
    },
);
