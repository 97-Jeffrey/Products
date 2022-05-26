import { 
  FETCH_PRODUCT_START, 
  FETCH_PRODUCT_SUCCESS, 
  ADD_PRODUCT, 
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "./actionType"

export const fetchProduct =()=>{

  return {
    type: FETCH_PRODUCT_START
  }
}


export const fetchProductSuccess = data =>{

  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: {
      data
    }
  }
}

export const addProduct = data =>{

  return {
    type: ADD_PRODUCT,
    payload: data
  }
}

export const updateProdct = data =>{

  return {
    type: UPDATE_PRODUCT,
    payload:{
      data
    }
  }
}

export const deleteProduct = id =>{

  return {
    type: DELETE_PRODUCT,
    payload:{
      id
    }
  }
}