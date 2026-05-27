import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_KEY } from 'shared/const/localStorage';
import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_KEY);
            if (user) state.authData = JSON.parse(user);
        },
        signOut: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
