/**
 * Ecommerce Reducer
 */

//action types
import {
   ADD_TO_CART,
   ADD_TO_WISHLIST,
   REMOVE_FROM_CART,
   UPDATE_PRODUCT_QUANTITY,
   FINAL_PAYMENT,
   MOVE_WISHLISTITEM_TO_CART,
   REMOVE_FROM_WISHLIST,
   DELETE_USER,
   ADD_NEW_USER
} from '../actions/types';

//initial data
let cartData = [
  
]
let wishlistData = [
  
]
let collaborationData = [
   
]
const TAX = 11.37;
const SHIPPING = 3.37;

const INITIAL_STATE = {
   cart: cartData,
   wishlist: wishlistData,
   tax: TAX,
   shipping: SHIPPING,
   receiptProducts: null,
   collaborationData: collaborationData,
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // add product to cart 
      case ADD_TO_CART:
         let product = action.payload;
         let newProductData = {
            productID: product.id,
            image: product.image,
            name: product.name,
            quantity: 1,
            price: product.price,
            totalPrice: product.price,
         }
         return {
            ...state,
            cart: [...state.cart, newProductData],
            totalPrice: state.totalPrice + newProductData.price
         }

      // add product to wishlist
      case ADD_TO_WISHLIST:
         let wishlistItem = action.payload;
         let newWishlistItem = {
            productID: wishlistItem.id,
            image: wishlistItem.image,
            name: wishlistItem.name,
            quantity: 1,
            price: wishlistItem.price,
            totalPrice: wishlistItem.price,
         }
         return {
            ...state,
            wishlist: [...state.wishlist, newWishlistItem],
         }
      // move wishlist product to cart	
      case MOVE_WISHLISTITEM_TO_CART:
         let data = state.wishlist;
         for (const wishlistItem of data) {
            let newItem = {
               productID: wishlistItem.id,
               image: wishlistItem.image,
               name: wishlistItem.name,
               quantity: 1,
               price: wishlistItem.price,
               totalPrice: wishlistItem.totalPrice,
            }
            state.cart.push(newItem)
         }
         return {
            ...state,
            cart: [...state.cart],
            wishlist: []
         }
      // delete product from wishlist
      case REMOVE_FROM_WISHLIST:
         let deleteItem = action.payload;
         let wishlist = state.wishlist.filter((wishlistItem) => wishlistItem.productID !== deleteItem.productID)
         return {
            ...state,
            wishlist
         }
      // update product item quantity
      case UPDATE_PRODUCT_QUANTITY:
         let newData = action.payload.cartItem;
         let newCartData = [];
         for (const cartItem of state.cart) {
            if (cartItem.productID === newData.productID) {
               cartItem.quantity = action.payload.newQuantity;
               cartItem.totalPrice = cartItem.price * cartItem.quantity
            }
            newCartData.push(cartItem)
         }
         return {
            ...state,
            cart: newCartData,
            totalPrice: state.totalPrice
         }
      // remove product to cart	
      case REMOVE_FROM_CART:
         let removeItem = action.payload;
         let cart = state.cart.filter((cartItem) => cartItem.productID !== removeItem.productID)
         return {
            ...state,
            cart,
            totalPrice: state.totalPrice - removeItem.price
         }
      // final statement (invoice)	
      case FINAL_PAYMENT:
         let checkOutProducts = state.cart;
         return {
            ...state,
            receiptProducts: checkOutProducts,
            cart: []
         }
      // delete user (admin-panel)	
      case DELETE_USER:
         let removeUser = action.payload;
         let NewUserList = state.collaborationData.filter((listItem) => listItem.id !== removeUser.id)
         return {
            ...state,
            collaborationData: NewUserList
         }
      // add product to cart 
      case ADD_NEW_USER:
         let newUser = action.payload;
         let newUserInfo = {
            name: newUser.name,
            email: newUser.email,
            access: newUser.access,
            image: "user-edit.png",
         }
         return {
            ...state,
            collaborationData: [...state.collaborationData, newUserInfo]
         }

      // default case	
      default:
         return { ...state }
   }
}