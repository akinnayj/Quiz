import React from "react";
import "./App.css";
import Quizzes from "./Quizzes";
import Buttons from "./Buttons.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  let categories = ["Geografi", "Naturfag", "Hvor bor?", "Språk"];

  return (
    <Router>
      <div>
        <nav>
          <div className="App">
            <Link to="/" className="App-header">
              <div className="App-header">Quiz</div>
            </Link>

            <Switch>
              <Route path="/" exact>
                <div className="ridge">
                  <div>
                    <h2>Velg en kategori</h2>
                  </div>
                  {categories.map((categori) => (
                    <Buttons kategori={categori} />
                  ))}
                </div>
              </Route>

              <Route path="/Quizzes" component={Quizzes} />
            </Switch>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
