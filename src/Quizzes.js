import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { geografi } from "./QuizList.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [chosenIndex, setIndex] = useState(null);
  const [check, setCheck] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  let totalScore = 10;

  function CheckAnswer(alternativ) {
    setAnswered(true);

    setIndex(alternativ);

    if (alternativ == [geografi[questionNumber].riktig]) {
      setCheck(true);
      if (score < 10) {
        setScore(score + 1);
      }
    } else {
      setCheck(false);
      if (score > -10) {
        setScore(score - 1);
      }
    }
  }

  function next() {
    if (questionNumber < geografi.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
    setAnswered(false);
  }

  return (
    <div className="ridge">
      <h2>{geografi[questionNumber].spørsmål}</h2>
      <p className="br">
        <div>
          {geografi[questionNumber].alternativer.map((alternativ, index) => (
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
              <div>
                {check ? (
                  <p className="correcto">Correcto</p>
                ) : (
                  <p className="falso">Falso</p>
                )}
                <button className="button-alternativ">Prøv igjen</button>
                <button className="button-alternativ" onClick={next}>
                  Next
                </button>
              </div>
            ) : (
              <p>Trykk på knappene for å svare</p>
            )}
          </b>
          <p className="right">
            Du har {score} av {totalScore} poeng!
          </p>
        </div>
      </p>
    </div>
  );
}

export default Quizzes;
