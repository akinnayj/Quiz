import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Quizzes({ kategori }) {
  return (
    <div className="ridge">
      geografi = [{(Spørsmål = "Hvor bor Annika?")},{" "}
      {((Alternativ = "Arendal"), "Lillesand", "Oslo", "Trondheim")},{" "}
      {(riktigAlt = "4")}]
      <p>
        Du valgte kategori <b>Geografi</b>
      </p>
    </div>
  );
}

export default Quizzes;
