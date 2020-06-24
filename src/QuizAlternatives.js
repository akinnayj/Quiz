import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Quizzes from "./Quizzes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function QuizAlternatives(kategori) {
  console.log("FUNKER");
  return (
    <div>
      <Link to="./Quizzes" className="correcto"></Link>
      <button onClick={OneAlternativ}>{kategori}</button>
    </div>
  );
}

function OneAlternativ() {}

export default QuizAlternatives;
