// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import AppCss from "./App.css";
import LogoSvg from "./logo.svg";
import * as LearnReact from "./components/LearnReact.js";

var logo = LogoSvg;

var _a = AppCss;

function App$default(Props) {
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "src/App.js"), " and save to reload."), React.createElement(LearnReact.make, {})));
}

var $$default = App$default;

export {
  logo ,
  _a ,
  $$default ,
  $$default as default,
  
}
/* logo Not a pure module */
