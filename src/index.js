//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var greetStyle = {};

const hour = 14; // new Date().getHours()

if (hour < 12) {
  var greet = <h1>Good morning</h1>;
  greetStyle.color = "Blue";
} else if (hour < 18) {
  var greet = <h1>Good evening</h1>;
  greetStyle.color = "orangered";
} else {
  var greet = <h1>Good night</h1>;
  greetStyle.color = "gray";
}

ReactDOM.render(
  <h1 style={greetStyle}>{greet}</h1>,
  document.getElementById("root")
);
