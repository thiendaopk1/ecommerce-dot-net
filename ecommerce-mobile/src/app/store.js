import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/ShoppingCart/cartSlice';
import compareReducer from '../features/Product/components/compareSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
  compare: compareReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
