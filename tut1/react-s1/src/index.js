import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App'
import './index.css'

let todos = [
    {
      id: 1,
      title: "Dinner with family",
      isCompleted: true,
      isInTrash: false,
    },
    { id: 2, title: "Do exercies", isCompleted: false, isInTrash: false },
    { id: 3, title: "Reading books", isCompleted: false, isInTrash: false },
  ];

ReactDOM.render(<App todos={todos} />, document.getElementById("app"));
