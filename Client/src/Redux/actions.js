import axios from "axios";

export const ERROR = "ERROR";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_USERS = "GET_USERS";
export const GET_USER_LOGGED = "GET_USER_LOGGED"
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL"
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const GET_PRODUCT_BY_QUERY = "GET_PRODUCT_BY_QUERY";
export const FILTER_BY_USER = "FILTER_BY_USER";
export const ORDER_PRODUCT_ALF = "ORDER_PRODUCT_ALF";
export const POST_PRODUCTS = "POST_PRODUCTS";
export const ORDER_PRICE = "ORDER_PRICE";
export const REGISTER_USER = "REGISTER_USER"

export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_MARCA = "ORDER_MARCA";

/////CART///
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART ="REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
////CART////

export const GET_COMMENTS = "GET_COMMENTS";
export const POST_COMMENTS = "POST_COMMENTS";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/product`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/users`);
      let userArray = response.data.map((objeto) => objeto.name);
      dispatch({
        type: GET_USERS,
        payload: userArray,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getUserByid = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/user/${id}`);
      let userArray = response.data.map((objeto) => objeto.name);
      dispatch({
        type: GET_USER_ID,
        payload: userArray,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export function getProductId(id) {
  return async (dispatch) => {
    try {
      let json = await axios.get(`http://localhost:3001/product/${id}`);
      dispatch({
        type: GET_PRODUCT_ID,
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
}

export function getProductQuery(model) {
  return async (dispatch) => {
    try {
      let json = await axios.get(`http://localhost:3001/product?name=${model}`);
      dispatch({
        type: GET_PRODUCT_BY_QUERY,
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
}
export const registerUser = (payload) => {
  return async (dispatch) => {
    try {
      let json = await axios.post(`http://localhost:3001/user/signup`, payload);
      let user = json.config.data
      dispatch({
        type: REGISTER_USER,
        payload: user
      })
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error
      });
    }
  };
};

export const getUserLogged = (payload) => {
  return async(dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/user/email/${payload}`)
      let user = response.data
      dispatch({
        type: GET_USER_LOGGED,
        payload: user
      })
    } catch (error) {
      
    }
  }
}

export const postProduct = (payload) => {
  return async () => {
    try {
      let json = await axios.post(`http://localhost:3001/product/add`, payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

export const validateToken = (payload)=>{
  return async ()=> {
    try {
      let json = await axios.post(`http://localhost:3001/user/confirm/${payload.token}`, payload)
      return json
    } catch (error) {
      console.log(error)
    }
  }
}

export function filterByUser(payload) {
  return {
    type: FILTER_BY_USER,
    payload,
  };
}

// export const orderProductAlf = (payload) => {

//   return async (dispatch) => {
    
//   }
// };


export function orderByName(payload){
  return{
      type: ORDER_BY_NAME,
      payload
  }
}

export function orderMarca(payload){
  return{
    type: ORDER_MARCA,
    payload
  }
}

export function orderPrice(payload){
  return{
    type: ORDER_PRICE,
    payload
  }
}


/////cART///

export function addToCarts(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}
export function deleteOneCart(id){
  return{
    type: REMOVE_ONE_FROM_CART,
    payload: id
  }
}
export function deleteAllCarts(id){
  return{
    type: REMOVE_ALL_FROM_CART,
    payload:id
  }
}

export function clearCarts(){
  return{
    type: CLEAR_CART
  }
}

export const getComments = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/comment`);
      dispatch({
        type: GET_COMMENTS,
        payload: response.data,
      }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const postComments = (payload) => {
  return async () => {
    try {
      let json = await axios.post(`http://localhost:3001/comment`, payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

