import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const { pathname } = useLocation();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
