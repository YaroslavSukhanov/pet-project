import { ICounterSchema } from 'entities/Counter/model/types/counterSchema';
import { IUserSchema } from 'entities/User';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
}
