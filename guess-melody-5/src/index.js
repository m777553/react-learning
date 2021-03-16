import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import questions from "./mocks/questions.js";

const Settings = {
  ERRORS_COUNT: 3
};
//Подключим и  передадим моки в компонент `App`. import questions from "./mocks/questions.js"; questions={questions}
ReactDOM.render(
  <App errorsCount={Settings.ERRORS_COUNT} questions={questions} />,
  document.querySelector(`#root`)
);
