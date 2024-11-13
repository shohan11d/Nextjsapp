import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'shohan',
  email: 'shohan@gmail.com',
  password: '123456',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateName } = userSlice.actions;

export default userSlice.reducer;
