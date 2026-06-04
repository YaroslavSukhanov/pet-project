import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/deepPartial';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        navigate,
    );

    return <Provider store={store}>{children}</Provider>;
};
