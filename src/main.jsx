import React from "react";
import ReactDOM from "react-dom/client";

import store from "./Redux/Redux-store.jsx";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

);
