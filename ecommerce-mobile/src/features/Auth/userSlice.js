import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);

  // luu data vao localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});
export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);

  // luu data vao localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});
export const forgotPassword = createAsyncThunk('user/forgotPassword', async (payload) => {
  // localStorage.setItem(StorageKeys.TOKEN,{});
  // localStorage.setItem(StorageKeys.USER,{});
  const data = await userApi.forgotPassword(payload);
  return data;
});
export const changePassword = createAsyncThunk('user/changePassword', async (payload) => {
  const data = await userApi.changePassword(payload);

  // luu data vao localStorage
  // localStorage.setItem(StorageKeys.TOKEN,data.jwt);
  // localStorage.setItem(StorageKeys.USER,JSON.stringify(data.user));

  return data;
});
export const doiMatKhau = createAsyncThunk('user/doiMatKhau', async (payload) => {
  const data = await userApi.doiMatKhau(payload);

  // luu data vao localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});
export const updateUser = createAsyncThunk('user/updateUser', async (payload) => {
  const data = await userApi.updateUser(payload);

  // luu data vao localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear localStorage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [doiMatKhau.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; // default export
