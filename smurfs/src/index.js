import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// reducer
import rootReducer from "./reducers";

// styles
import "./index.css";

// components
import App from "./components/App";

// create store
const store = createStore(rootReducer, applyMiddleware(thunk));

// wrap in provider component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
