import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/thunks';
import { useUsers } from 'hooks/useUsers';

const COUNT = 6;

export const usePagination = () => {
  const { users, isLoading, error, total_users } = useUsers();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ page, count: COUNT }));
  }, [dispatch, page]);

  const loadMore = () => setPage(prevPage => prevPage + 1);

  const showList = users.length !== 0 && !error;
  const showError = !isLoading && error;
  const showLoadMore =
    !error && !isLoading && users.length !== 0 && total_users > users.length;

  return {
    showError,
    showList,
    showLoadMore,
    isLoading,
    users,
    loadMore,
  };
};
