import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { quizList } from "./QuizList.js";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hintIMG } from "./img/hint.png";

function Quizzes({ kategori }) {
  const [chosenIndex, setIndex] = useState(0);
  const [check, setCheck] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [tryagian, setTryagain] = useState(false);
  const [finish, setFinish] = useState(false);
  const location = useLocation();
  const categoryNumber = location.state.category;
  const [totalScore, setTotalScore] = useState(quizList[categoryNumber].length);
  const [hint, setHint] = useState(false);
  const [hintCounter, setHintCounter] = useState(0);

  function CheckAnswer(alternativ) {
    setAnswered(true);
    setIndex(alternativ);
    setTimer(true);

    if (alternativ == [quizList[categoryNumber][questionNumber].riktig]) {
      setCheck(true);
      if (score < quizList[categoryNumber].length) {
        setScore(score + 1);
      }
    } else {
      setCheck(false);
      if (score > -quizList[categoryNumber].length) {
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
    setHint(false);
  }

  function hintButton() {
    if (hintCounter < 3) {
      setHintCounter(hintCounter + 1);
      setHint(quizList[categoryNumber][questionNumber].hint);
    }
  }

  function again() {
    setTryagain(true);
    setAnswered(false);
    setHint(false);
  }

  return (
    <div className="ridge">
      <break>
        <div className="top">
          {finish ? (
            <div className="finish-margin">
              <Link to="/" className="finishButton">
                The quiz is over
              </Link>
            </div>
          ) : (
            <div>
              <button
                id="close-CSS"
                className="button-alternativ hintPosistion"
                onClick={hintButton}
              >
                {hintCounter} av 3
              </button>

              <div>
                <h3 className="font">
                  {quizList[categoryNumber][questionNumber].spørsmål}
                </h3>
              </div>
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
                <p className="font-fam">Trykk på en knapp for å svare</p>
              )}
            </div>
          )}

          {hint ? (
            <p className="scoreANDhint">Hintet er {hint}</p>
          ) : (
            <p className="scoreANDhint">
              Du har {score} av {totalScore} poeng!
            </p>
          )}
        </div>
      </break>
    </div>
  );
}

export default Quizzes;
