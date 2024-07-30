import {createContext} from 'react'
function newFunction(cartList) {
    return cartList
      .map((item) => item.quantity * item.price)
      .reduce((pre, cur) => {
        return pre + cur;
      }, 0);
}
export const cartInit = {
    cartList:[],
    }
export const cartReducer = (state ,action)=> {
    const cartList = [...state.cartList];
    const index = cartList.findIndex(item => item.id === action.payload.id);
    switch (action.type) {
      case 'ADD_TO_CART':
        if(index === -1){
          cartList.push(action.payload);
        }else{
          cartList[index].quantity += action.payload.quantity;
        }
        return {
          ...state,
          cartList,
          total:newFunction(cartList)
        }
      case 'UPDATE_QUANTITY':
        cartList[index].quantity = action.payload.quantity;
        return {
          ...state,
          cartList,
          total:newFunction(cartList)
        }
      case 'DELETE_PRODUCT':
        cartList.splice(index , 1);
        return {
          ...state,
          cartList,
          total:newFunction(cartList)
        }
      default:
        return state
    }
    }
export const CartContext = createContext({});
