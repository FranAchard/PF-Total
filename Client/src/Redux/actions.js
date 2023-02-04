import axios from "axios";

export const ERROR = "ERROR";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_USERS = "GET_USERS";
export const GET_PRODUCT_ID = "GET_PRODUCT_ID";
export const GET_PRODUCT_BY_QUERY = "GET_PRODUCT_BY_QUERY";
export const FILTER_BY_USER = "FILTER_BY_USER";
export const ORDER_PRODUCT_ALF = "ORDER_PRODUCT_ALF";
export const POST_PRODUCTS = "POST_PRODUCTS";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/product`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
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
      let response = await axios.get(`http://localhost:3001/user`);
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

export const postProduct = (payload) => {
  return async () => {
    try {
      let json = await axios.post(``, payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterByUser(payload) {
  return {
    type: FILTER_BY_USER,
    payload,
  };
}

export const orderProductAlf = (payload) => {
  return {
    type: ORDER_PRODUCT_ALF,
    payload,
  };
};


