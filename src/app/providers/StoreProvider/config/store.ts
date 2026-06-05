import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
import { IStateSchema, IThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState: IStateSchema,
    asyncReducers: ReducersMapObject<IStateSchema>,
    navigate?: NavigateFunction,
) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgument: IThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<IStateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
