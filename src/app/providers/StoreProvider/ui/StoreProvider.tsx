import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/deepPartial';

interface IStoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema);

    return <Provider store={store}>{children}</Provider>;
};
