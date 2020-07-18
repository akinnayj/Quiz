import React, { useState } from "react";
import ReactDOM from "react-dom";
import { geografi } from "./QuizList.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Next() {
  console.log("Hei");
  return (
    <div className="ridge">
      <p>Spørsmål: {geografi[2].spørsmål}</p>
    </div>
  );
}

export default Next;
