import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App/App";
import store from "./store/index";

const render = () => {
  // fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();

store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
  console.log(store.getState());
}

<script
  src="https://kit.fontawesome.com/f3a5cbd4ec.js"
  crossorigin="anonymous"
></script>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
