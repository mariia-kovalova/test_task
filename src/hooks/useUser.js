import { useSelector } from 'react-redux';
import {
  selectUserToken,
  selectUserError,
  selectUserId,
  selectUserIsLoading,
} from 'redux/user/selectors';

export const useStores = () => {
  const token = useSelector(selectUserToken);
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);

  return {
    token,
    userId,
    isLoading,
    error,
  };
};
