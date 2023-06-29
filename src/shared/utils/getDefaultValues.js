export const getDefaultValues = inputs =>
  inputs.reduce(
    (acc, input) => ({
      ...acc,
      [input]: input !== 'position_id' ? '' : '1',
    }),
    {}
  );
