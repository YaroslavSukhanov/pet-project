import { useSelector } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';

export const useAppSelector = useSelector.withTypes<IStateSchema>();
