import {
  ERROR,
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_PRODUCT_BY_QUERY,
  GET_PRODUCT_ID,
  FILTER_BY_USER,
  ORDER_PRODUCT_ALF,
  POST_PRODUCTS
} from "./actions";

const initialState = {
  product: [],
  allProducts:[],
  users: [],
  detail: [],
  error: [],
  filteredProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case GET_PRODUCT_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_PRODUCT_BY_QUERY:
      return {
        ...state,
        products: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_PRODUCTS:
      return {
        ...state,
      };

    case ORDER_PRODUCT_ALF:
      let sortedAlf;
      if (action.payload === "alf") {
        if (state.filteredProducts.length > 0) {
          sortedAlf = [...state.filteredProducts].sort(function (a, b) {
            if (a.name === null) {
              return 0;
            }
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filteredProducts: sortedAlf,
          };
        } else {
          sortedAlf = [...state.products].sort(function (a, b) {
            if (a.name === null) {
              return 0;
            }
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            products: sortedAlf,
          };
        }
      } else if (action.payload === "pop") {
        if (state.filteredProducts.length > 0) {
          sortedAlf = [...state.filteredProducts].sort(function (a, b) {
            if (b.name === null) {
              return 0;
            }
            if (a.name < b.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filteredProducts: sortedAlf,
          };
        } else if (action.payload === "pop") {
          sortedAlf = [...state.products].sort(function (a, b) {
            if (b.name === null) {
              return 0;
            }
            if (a.name < b.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            products: sortedAlf,
          };
        }
      } else {
        return {
          ...state,
          products: state.products,
        };
      }
      break;

    case FILTER_BY_USER:
      const allProduct2 = state.products;
      let filteredUser = state.products;

      if (action.payload === "AllUser") {
        return {
          ...state,
          products: state.products,
          filteredProducts: [],
        };
      } else {
        filteredUser = allProduct2.filter((e) => {
          return e.user?.includes(action.payload);
        });
        return {
          ...state,
          filteredProducts: filteredUser,
        };
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
