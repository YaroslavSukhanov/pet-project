import { ICounterSchema } from 'entities/Counter/model/types/counterSchema';
import { IUserSchema } from 'entities/User/model/types/user';
import type { ILoginSchema } from 'features/AuthByUsername';
import { Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile/model/types/profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;

    // async reducers
    loginForm?: ILoginSchema;
    profile: IProfileSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: UnknownAction) => IStateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
}
