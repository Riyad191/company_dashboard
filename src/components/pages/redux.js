import { createStore } from "redux";

const STACK = "STACK";

function setStack(stack) {
  return {
    type: STACK,
    stack,
  };
}

function stacks(state = {}, action) {
  switch (action.type) {
    case STACK:
      return [...state, { ...action.stack }];
    default:
      return state;
  }
}

const store = createStore(
  stacks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
