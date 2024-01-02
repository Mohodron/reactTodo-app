import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// let body = document.getElementById("body");
// let blue = document.getElementById("blue");
// function changeMode() {
//     if(blue.isChecked){
//         body.classList.add("light-mode")
//     } else {
//         body.classList.remove("light-mode")
//     }
// }
// blue.addEventListener('click' , changeMode);