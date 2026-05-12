import 'app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
