import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import QuizAlternatives from "./QuizAlternatives.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [count, setCount] = useState(8);
  let geografi = [
    {
      spørsmål: "Hvor høyt er mt everest",
      alternativer: [100, 200, 300, 8000],
      riktig: 3,
    },
  ];

  function CheckAnswer(alternativ) {
    console.log(alternativ);
    if (alternativ == geografi[0].alternativer[geografi[0].riktig]) {
      console.log("Correcto");
    } else {
      console.log("Falso");
    }
  }

  return (
    <div className="ridge">
      <p>Spørsmål: {geografi[0].spørsmål}</p>
      <p>
        Det er fire alternativer:
        <div className="alternativer">
          {geografi[0].alternativer.map((alternativ) => (
            <Route>
              <button
                onClick={() => CheckAnswer(alternativ)}
                className="button-alternativ"
              >
                {alternativ}
              </button>
            </Route>
          ))}
        </div>
      </p>
    </div>
  );
}
export default Quizzes;
