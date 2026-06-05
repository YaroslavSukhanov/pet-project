import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileFirstname = (state: IStateSchema) => state?.profile?.data?.first || '';
