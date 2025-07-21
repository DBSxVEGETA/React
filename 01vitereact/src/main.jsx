import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>Hello chai!!</h1>;
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherUser = "Chai aur react";

const reactElement = React.createElement("a", { href: "http://google.com", target: "_blank" }, "click me to visit google", anotherUser);

const anotherElement = (
  <a href="http://www.google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(reactElement);
