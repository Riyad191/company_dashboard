import { createStore } from "redux";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_APPLICATIONS = "SET_APPLICATIONS";
const SET_TOOLS = "SET_TOOLS";
const SET_SHOW_TOOLS = "SET_SHOW_TOOLS";
const SET_SHOW_ACCORDION = "SET_SHOW_ACCORDION";

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

export function setShowTools(showTools) {
  return {
    type: SET_SHOW_TOOLS,
    payload: showTools,
  };
}

export function setShowAccordion(showAccordion) {
  return {
    type: SET_SHOW_ACCORDION,
    payload: showAccordion,
  };
}

const INIT_STATE = {
  products: [],
  applications: [],
  tools: [],
  showTools: false,
  showAccordion: false,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case SET_APPLICATIONS:
      return { ...state, applications: action.payload };

    case SET_TOOLS:
      return { ...state, tools: action.payload };

    case SET_SHOW_TOOLS:
      return { ...state, showTools: action.payload };

    case SET_SHOW_ACCORDION:
      return { ...state, showAccordion: action.payload };

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
