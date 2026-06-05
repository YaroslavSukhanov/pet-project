import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<IProfile>('/profile');

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
