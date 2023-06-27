export const getDefaultValues = inputs =>
  inputs.reduce(
    (acc, input) => ({
      ...acc,
      [input.inputName]: '',
    }),
    {}
  );
