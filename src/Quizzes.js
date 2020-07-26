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
  const location = useLocation();
  const categoryNumber = location.state.category;
  const [totalScore, setTotalScore] = useState(quizList[categoryNumber].length);

  function CheckAnswer(alternativ) {
    setAnswered(true);
    setIndex(alternativ);

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
  }

  function again() {
    setTryagain(true);
    setAnswered(false);
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
              <h2 className="font">
                {quizList[categoryNumber][questionNumber].spørsmål}
              </h2>
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

          <p className="score">
            Du har {score} av {totalScore} poeng!
          </p>
        </div>
      </break>
    </div>
  );
}

export default Quizzes;
