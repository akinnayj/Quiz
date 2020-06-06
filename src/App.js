import React from "react";
import "./App.css";
import Quizzes from "./quizPage";
import Home from "./Home.js";
import Buttons from "./categori.js";
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
              <Route path="/quizPage">
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
