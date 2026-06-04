import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
    IStateSchema, IReduxStoreWithManager, IThunkExtraArg, IThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    AppDispatch,
    IReduxStoreWithManager,
    IThunkExtraArg,
    IThunkConfig,
};
