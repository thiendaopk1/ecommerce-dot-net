import { createSlice } from "@reduxjs/toolkit";

// import localStorage from "redux-persist/es/storage";

let cartItemsStore = []

if(localStorage.getItem("cart"))
    cartItemsStore = JSON.parse(localStorage.getItem("cart"))

    console.log(cartItemsStore);

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
            
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.idp === newItem.idp);

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
        
        // addToCartAgaint (state, action){
        //     const items = action.payload;
           

        // },

        setQuantity(state, action){
            const { idp,quantity } = action.payload;
            //check product available in cart
            const index = state.cartItems.findIndex((x) => x.id === idp);
            if(index >= 0){
                if(quantity==0){
                    state.cartItems = state.cartItems.filter(x => x.id !== idp);
                    localStorage.setItem("cart", JSON.stringify(state.cartItems));
                }else{
                //update quantity
                state.cartItems[index].quantity = quantity;
            }
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter(x => x.idp != idNeedToRemove.idp);
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        removeAll(state) {
            localStorage.removeItem("cart");
            state.current = {};
            state.cartItems = []
            
        },
        setCart(state,action){
           const cart = action.payload 
           console.log({cart});
           
           state.cartItems = cart

           localStorage.setItem("cart", JSON.stringify(cart))
        }
    },
});

const {actions, reducer} = cartSlice;
export const {showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart, removeAll, setCart} = actions;
export default reducer; 
