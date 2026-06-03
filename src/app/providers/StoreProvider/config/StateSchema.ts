import { ICounterSchema } from 'entities/Counter/model/types/counterSchema';
import { IUserSchema } from 'entities/User/model/types/user';
import type { ILoginSchema } from 'features/AuthByUsername';
import { Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile';

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
