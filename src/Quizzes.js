import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import QuizAlternatives from "./QuizAlternatives.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [chosenIndex, setIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [tryagain, setTryagain] = useState(false);

  let geografi = [
    {
      spørsmål: "Hvor bor Annika?",
      alternativer: ["Bergen", "Trondheim", "Oslo", "Lillesand"],
      riktig: 3,
    },
  ];

  function CheckAnswer(alternativ) {
    setAnswered(true);

    setIndex(alternativ);

    if (alternativ == [geografi[0].riktig]) {
      setCheck(true);
      setScore(score + 1);
    } else {
      setCheck(false);
      setScore(score - 1);
    }
  }

  return (
    <div className="ridge">
      <p>Spørsmål: {geografi[0].spørsmål}</p>
      <p className="br">
        Det er fire alternativer:
        <div>
          {geografi[0].alternativer.map((alternativ, index) => (
            <button
              className="button-alternativ"
              onClick={() => CheckAnswer(index)}
            >
              {alternativ}
            </button>
          ))}
        </div>
        <div>
          <b>
            {answered ? (
              <p>
                {check ? (
                  <p className="correcto">Correcto</p>
                ) : (
                  <p className="falso">Falso</p>
                )}
                <button className="button-alternativ">Prøv igjen</button>
                <button className="button-alternativ">Next</button>
              </p>
            ) : (
              <p>Trykk på knappene for å svare</p>
            )}
          </b>
          <p className="right">Du har {score} av 10 poeng</p>
        </div>
      </p>
    </div>
  );
}

export default Quizzes;
