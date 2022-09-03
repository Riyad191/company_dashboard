import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";
// import Practice from "./practice";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Practice /> */}
      {/* <Practice2 /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
