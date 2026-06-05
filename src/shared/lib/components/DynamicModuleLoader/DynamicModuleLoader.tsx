import React, { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
    children?: React.ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as unknown as IReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.add(name as StateSchemaKey, reducer);
                });
            }
        };
    }, [reducers, removeAfterUnmount, store.reducerManager]);

    return <>{children}</>;
};
