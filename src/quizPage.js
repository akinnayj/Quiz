import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Quizzes({ kategori }) {
  let geografi = [{Spørsmål = "Hvor bor Annika?", Alternativ="Trondheim", "Oslo", "Kristiansand", "Lillesand", riktigAlt="1"}];
  return (
    <div className="ridge">
      <p>
        Du valgte kategori <b>Geografi</b>
      </p>
    </div>
  );
}

export default Quizzes;
