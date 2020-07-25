import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./App.css";

function Buttons({ kategori, indexNr }) {
  const history = useHistory();

  function showQuizzes() {
    history.push("/Quizzes", { category: indexNr });
  }

  return (
    <button className="button-alternativ" onClick={showQuizzes}>
      {kategori}
    </button>
  );
}

export default Buttons;
