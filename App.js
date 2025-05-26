import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Getting Statrted with React"
);

const nestedEl = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "sibling1" }, "I am h1 tag"),
    React.createElement("h2", { id: "sibling2" }, "I am h2 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedEl);
