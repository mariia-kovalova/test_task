import { useSelector } from 'react-redux';
import {
  selectUsersError,
  selectUsersIsLoading,
  selectUsersItems,
} from 'redux/users/selectors';

export const useStores = () => {
  const users = useSelector(selectUsersItems);
  const isLoading = useSelector(selectUsersIsLoading);
  const error = useSelector(selectUsersError);

  return {
    users,
    isLoading,
    error,
  };
};
