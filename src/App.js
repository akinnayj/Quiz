import React from "react";
import "./App.css";
import Quizzes from "./Quizzes";
import QuizAlternatives from "./QuizAlternatives";
import Buttons from "./Buttons.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let categories = ["Geografi", "Film", "Naturfag", "Språk", "Mat", "Mixed"];

  return (
    <Router>
      <div>
        <nav>
          <div className="App">
            <Link to="/" className="App-header">
              <div className="App-header">Quiz</div>
            </Link>

            <Switch>
              <Route path="/Quizzes">
                <Quizzes />
              </Route>

              <Route path="/">
                <div className="ridge">
                  {categories.map((categori) => (
                    <Buttons kategori={categori} />
                  ))}
                </div>
              </Route>
            </Switch>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
