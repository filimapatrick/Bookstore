import { ActionTypes } from "../actions/Action-types";

const initialState = {
    products: [
        {
            id:1,
            title:'Dipesh',
            category:'programmer'
        }
    ],
}

export const productsReducer =(state = initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return{
                ...state,
                products: payload
            }
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
          return{
              ...state,
              ...payload
          }
   
          case ActionTypes.REMOVE_SELECTED_PRODUCT:
        default: {};
            return state;
    }
}


// export const ProductsReducers = (state = {initialState}, {type, payload }) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return {
//                 ...state,
//                 products: payload
//             }
//         case ActionTypes.SELECTED_PRODUCT:
//             return {
//                 ...state,
//                 selectedProduct: action.payload
//             }
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return {
//                 ...state,
//                 selectedProduct: null
//             }
//         case ActionTypes.ADD_TO_CART:
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         case ActionTypes.REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cart: state.cart.filter(item => item.id !== action.payload.id)
//             }
//         case ActionTypes.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 cart: action.payload
//             }
//         case ActionTypes.SET_CART_TOTAL:
//             return {
//                 ...state,
//                 cartTotal: action.payload
//             }
//         case ActionTypes.SET_CART_ITEMS_COUNT:
//             return {
//                 ...state,
//                 cartItemsCount: action.payload
//             }
//         case ActionTypes.SET_CART_ITEMS_COUNT_IN_CART:
//             return {
//                 ...state,
//                 cartItemsCountInCart: action.payload
//             }
//         case ActionTypes.SET_CART_ITEMS_COUNT_IN_CART_INCREMENT:
//             return {
//                 ...state,
//                 cartItemsCountInCart: state.cartItemsCountInCart + 1
//             }
//         case ActionTypes.SET_CART_ITEMS_COUNT_IN_CART_DECREMENT:
//             return {
//                 ...state,
//                 cartItemsCountInCart: state.cartItemsCountInCart - 1
//             }
//         case ActionTypes.SET_CART_ITEMS_COUNT_IN_CART_RESET:
//             return {
//                 ...state,
//                 cartItemsCountInCart: 0
//             }
//         }