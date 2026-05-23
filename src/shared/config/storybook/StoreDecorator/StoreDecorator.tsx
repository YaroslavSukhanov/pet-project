import { Decorator } from '@storybook/react';
import { StoreProvider, IStateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/deepPartial';

export const StoreDecorator = (
    initialState?: DeepPartial<IStateSchema>,
): Decorator => (Story) => (
    <StoreProvider initialState={initialState}>
        <Story />
    </StoreProvider>
);
