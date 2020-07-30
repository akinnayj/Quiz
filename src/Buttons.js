import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./App.css";
import Quizzes from "./Quizzes.js";
import Countdown from "react-countdown";

function counter() {
  const Counter = () => <span>Game over!</span>;

  ReactDOM.render(
    <Countdown date={Date.now() + 3000}>
      <Quizzes />
    </Countdown>,
    document.getElementById("root")
  );
}

function Buttons({ kategori, indexNr }) {
  const history = useHistory();

  function showQuizzes() {
    history.push("/Quizzes", { category: indexNr });
  }

  return (
    <button
      className="button-alternativ"
      onClick={showQuizzes}
      onClick={counter}
    >
      {kategori}
    </button>
  );
}

export default Buttons;
