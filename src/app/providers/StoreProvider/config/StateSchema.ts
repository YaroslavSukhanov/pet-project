import { ICounterSchema } from 'entities/Counter/model/types/counterSchema';
import { IUserSchema } from 'entities/User/model/types/user';
import type { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm: ILoginSchema;
}
