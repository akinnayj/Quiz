import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Buttons({ kategori }) {
  return (
    <Link to="/quizPage" className="button-link">
      <button onClick={ShowQuizzes}>{kategori}</button>
    </Link>
  );
}

function ShowQuizzes() {}

export default Buttons;
