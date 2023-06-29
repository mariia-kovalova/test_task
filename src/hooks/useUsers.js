import { useSelector } from 'react-redux';
import {
  selectUsersError,
  selectUsersIsLoading,
  selectUsersItems,
  selectUsersTotal,
} from 'redux/users/selectors';

export const useUsers = () => {
  const total_users = useSelector(selectUsersTotal);
  const users = useSelector(selectUsersItems);
  const isLoading = useSelector(selectUsersIsLoading);
  const error = useSelector(selectUsersError);

  return {
    total_users,
    users,
    isLoading,
    error,
  };
};
