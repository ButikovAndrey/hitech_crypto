import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { StoreContext, storeInstance } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  // <React.StrictMode>
  <StoreContext.Provider value={storeInstance}>
    <App />
  </StoreContext.Provider>,
  // </React.StrictMode>,
);
