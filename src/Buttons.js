import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./App.css";
import Quizzes from "./Quizzes.js";
import Countdown from "react-countdown";

function Buttons({ kategori, indexNr }) {
  const [countdown, setCountdown] = useState(false);
  const history = useHistory();

  function showQuizzes() {
    history.push("/Quizzes", { category: indexNr });
  }

  function timer() {}

  setInterval(() => {
    console.log("Interval triggered");
  }, 1000);

  return (
    <button className="button-alternativ" onClick={showQuizzes}>
      {kategori}
    </button>
  );
}

export default Buttons;
