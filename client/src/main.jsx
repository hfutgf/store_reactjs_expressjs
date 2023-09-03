import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Context.Provider
        value={{ user: new UserStore(), devices: new DeviceStore() }}
      >
        <App />
      </Context.Provider>
    </BrowserRouter>
);
