import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { quizList } from "./QuizList.js";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Quizzes({ kategori }) {
  const [chosenIndex, setIndex] = useState(0);
  const [check, setCheck] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [tryagian, setTryagain] = useState(false);
  const [finish, setFinish] = useState(false);
  const [totalScore, setTotalScore] = useState(quizList[0].length);
  const location = useLocation();
  const categoryNumber = location.state.category;

  function CheckAnswer(alternativ) {
    setAnswered(true);

    setIndex(alternativ);

    if (alternativ == [quizList[categoryNumber][questionNumber].riktig]) {
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
    if (questionNumber < quizList[categoryNumber].length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
    setAnswered(false);
    if (questionNumber == quizList[categoryNumber].length - 1) {
      setFinish(true);
    }
  }

  function again() {
    setTryagain(true);
    setAnswered(false);
  }

  return (
    <div className="ridge">
      <h2>{quizList[categoryNumber][questionNumber].spørsmål}</h2>
      <p className="right">
        Du har {score} av {totalScore} poeng!
      </p>
      <p className="br">
        <div>
          {quizList[categoryNumber][questionNumber].alternativer.map(
            (alternativ, index) => (
              <button
                className="button-alternativ"
                onClick={() => CheckAnswer(index)}
              >
                {alternativ}
              </button>
            )
          )}
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
                <button className="button-alternativ" onClick={again}>
                  Prøv igjen
                </button>
                <button className="button-alternativ" onClick={next}>
                  Next
                </button>
              </div>
            ) : (
              <p>Trykk på knappene for å svare</p>
            )}

            {finish ? (
              <div>
                <Link to="/" className="finishButton">
                  Ferdig!!
                </Link>
              </div>
            ) : (
              <p></p>
            )}
          </b>
        </div>
      </p>
    </div>
  );
}

export default Quizzes;
