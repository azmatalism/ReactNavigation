import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
    deviceToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
    clearUser: state => {
      return {
        ...state,
        userData: [],
      };
    },
    userDeviceToken: (state, action) => {
      return {
        ...state,
        deviceToken: action.payload,
      };
    },
  },
});

export const {setUser, clearUser, userDeviceToken} = userSlice.actions;

export const selectUserData = (state: any) => state.user.userData;

export default userSlice.reducer;

export const selectUserDeviceToken = (state: any) => state.user.deviceToken;
