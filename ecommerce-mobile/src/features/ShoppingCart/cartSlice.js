import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";
import StorageKeys from "../../constants/storage-keys";
// import localStorage from "redux-persist/es/storage";

let cartItemsStore = []

if(localStorage.getItem("cart"))
    cartItemsStore = JSON.parse(localStorage.getItem("cart"))

    console.log(cartItemsStore)
// export const addToCart = createAsyncThunk(
//     'api/cart',
//     async (payload) =>{
//         const data = await cartApi.add(payload);

//         //luu data vao localStorage

//     }
    


// )  
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: true,
        cartItems: cartItemsStore,
    },
    reducers: {
        showMiniCart(state){
            console.log(state);
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        addToCart(state, action) {
            // console.log(state);
            console.log(action.payload);
            
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);

            if(index >= 0 ){
                //increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            }
            else{
                //add to cart
                state.cartItems.push(newItem);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        setQuantity(state, action){
            const { id,quantity } = action.payload;
            //check product available in cart
            const index = state.cartItems.findIndex((x) => x.id === id);
            if(index >= 0){
                //update quantity
                state.cartItems[index].quantity = quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload;
            console.log(idNeedToRemove.id)
            state.cartItems = state.cartItems.filter(x => x.id != idNeedToRemove.id);
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
         
        },
        removeAll(state) {
            localStorage.removeItem("cart");
            state.current = {};
            state.cartItems = []
            
        }
    },
});

const {actions, reducer} = cartSlice;
export const {showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart, removeAll} = actions;
export default reducer; 
