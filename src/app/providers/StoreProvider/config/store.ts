import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState: IStateSchema): EnhancedStore {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
