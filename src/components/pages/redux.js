import { createStore } from "redux";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_APPLICATIONS = "SET_APPLICATIONS";
const SET_TOOLS = "SET_TOOLS";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function setApplications(apps) {
  return {
    type: SET_APPLICATIONS,
    payload: apps,
  };
}

export function setTools(tools) {
  return {
    type: SET_TOOLS,
    payload: tools,
  };
}

const INIT_STATE = {
  products: [],
  applications: [],
  tools: [],
};

function stacks(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_APPLICATIONS:
      return { ...state, applications: action.payload };

    case SET_TOOLS:
      return { ...state, tools: action.payload };

    default:
      return state;
  }
}

const store = createStore(
  stacks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
