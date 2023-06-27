import { useSelector } from 'react-redux';
import {
  selectPositionsError,
  selectPositionsIsLoading,
  selectPositionsItems,
} from 'redux/positions/selectors';

export const useStores = () => {
  const positions = useSelector(selectPositionsItems);
  const isLoading = useSelector(selectPositionsIsLoading);
  const error = useSelector(selectPositionsError);

  return {
    positions,
    isLoading,
    error,
  };
};
