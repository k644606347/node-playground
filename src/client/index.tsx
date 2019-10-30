import ReactDOM from "react-dom";
import React from "react";
import { isError } from "../common/utils/Is";

let createDiv = function() {
    let div = document.createElement("div"),
        root = document.body || document.documentElement;
    
    root.appendChild(div);
    return div;
}

isError;
document.addEventListener("DOMContentLoaded", () => {
    let wrapper = createDiv();
    ReactDOM.render(<div>hello!</div>, wrapper);
});