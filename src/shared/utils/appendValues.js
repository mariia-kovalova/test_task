export const appendValues = (formData, data) => {
  Object.entries(data).map(([key, value]) => formData.append(key, value));
};
