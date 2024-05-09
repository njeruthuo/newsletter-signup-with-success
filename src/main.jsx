import React from "react";
import App from "./App";
import Context from "./context";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Context>
      <App />
    </Context>
  </React.Fragment>
);
