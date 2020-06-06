import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Quizzes({ kategori }) {
  const [count, setCount] = useState(8);
  let geografi = [
    {
      spørsmål: "Hvor høyt er mt everest",
      alternativer: [100, 200, 300, 8000],
      riktig: 3,
    },
  ];

  function checkAnswer(alternativ) {
    console.log(alternativ);
    if (alternativ == geografi[0].alternativer[geografi[0].riktig]) {
      console.log("Correcto");
    } else {
      console.log("Falso");
    }
  }

  return (
    <div className="ridge">
      <p>Spørsmål: {geografi[0].spørsmål}</p>
      <p>
        Det er fire alternativer:
        <div className="alternativer">
          {geografi[0].alternativer.map((alternativ) => (
            <button
              onClick={() => checkAnswer(alternativ)}
              className="button-alternativ"
            >
              {alternativ}
            </button>
          ))}
        </div>
      </p>
      <p>
        <div className="correct"></div>
      </p>
    </div>
  );
}

export default Quizzes;
