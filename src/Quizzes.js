import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import QuizAlternatives from "./QuizAlternatives.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [chosenIndex, setIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const [answered, setAnswered] = useState(false);
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
    } else {
      setCheck(false);
    }
  }

  return (
    <div className="ridge">
      <p>Spørsmål: {geografi[0].spørsmål}</p>
      <p className="br">
        Det er fire alternativer:
        <div className="alternativer">
          {geografi[0].alternativer.map((alternativ, index) => (
            <button onClick={() => CheckAnswer(index)}>{alternativ}</button>
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
              </p>
            ) : (
              <p>Svaret ditt er feil, prøv å trykk på en knapp</p>
            )}
          </b>
        </div>
      </p>
    </div>
  );
}
export default Quizzes;
