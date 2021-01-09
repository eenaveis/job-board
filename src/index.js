import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app.js"
import "./css/index.css";
import {printSecretMessage} from "./services/secret-message.js";

// Print secret message
printSecretMessage();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
