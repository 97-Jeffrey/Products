import { 
  FETCH_PRODUCT_START, 
  FETCH_PRODUCT_SUCCESS,
  ADD_PRODUCT
 } from "../Action/actionType";


const INIT_STATE= []

const productReducer = (state = INIT_STATE, action) =>{

  switch(action.type){
    case FETCH_PRODUCT_START:
      return state;

    case FETCH_PRODUCT_SUCCESS:
      return  [...action.payload.data];

    case ADD_PRODUCT:
      return [...state, action.payload.data];

    default:
      return state;
  }

}


export default productReducer;