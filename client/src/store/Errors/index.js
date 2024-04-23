export const errorHandler = (callback) => {
  return (data, { rejectWithValue }) => {
    return callback(data, { rejectWithValue }).catch((error) => {
      rejectWithValue(error.response.data.message);
    });
  };
};
