import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import QuizAlternatives from "./QuizAlternatives.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [count, setCount] = useState(0);
  const [chosenIndex, setIndex] = useState(null);
  let geografi = [
    {
      spørsmål: "Hvor høyt er mt everest",
      alternativer: [100, 200, 300, 8000],
      riktig: 3,
    },
  ];

  function CheckAnswer(alternativ) {
    // whichButton[i] = geografi[0].alternativer[0];

    if (alternativ == geografi[0].alternativer[geografi[0].riktig]) {
      {
        console.log("true");
      }
    } else {
      {
        console.log("false");
      }
    }
  }

  return (
    <div className="ridge">
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Nullstille</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p></p>
      <p>Spørsmål: {geografi[0].spørsmål}</p>
      <p>
        Det er fire alternativer:
        <div className="alternativer">
          {geografi[0].alternativer.map((alternativ) => (
            <button onClick={() => setIndex(CheckAnswer(alternativ))}>
              {alternativ}
            </button>
          ))}
        </div>
      </p>
    </div>
  );
}
export default Quizzes;
