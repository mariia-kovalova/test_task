import { createSelector, nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  selectPositionsError,
  selectPositionsIsLoading,
  selectPositionsItems,
} from 'redux/positions/selectors';

const selectPoitionsWithInputInfoInfo = createSelector(
  [selectPositionsItems],
  positions =>
    positions.map(position => ({
      id: nanoid(),
      inputName: 'position_id',
      label: position.name,
      value: position.id,
    }))
);

export const usePositions = () => {
  const positions = useSelector(selectPoitionsWithInputInfoInfo);
  const isLoading = useSelector(selectPositionsIsLoading);
  const error = useSelector(selectPositionsError);

  return {
    positions,
    isLoading,
    error,
  };
};
