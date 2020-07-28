import React from "react";
import "./App.css";
import Quizzes from "./Quizzes";
import Buttons from "./Buttons.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";

function App() {
  let categories = ["Mixed", "Matte", "Natur", "Geografi", "Logo quiz"];

  return (
    <Router>
      <div>
        <nav>
          <div className="App">
            <Link to="/" className="App-header">
              <div className="App-header">Quizzes</div>
            </Link>

            <Switch>
              <Route path="/" exact>
                <div className="ridge">
                  <div className="top">
                    <p className="font">Velg en kategori</p>
                  </div>
                  {categories.map((categori, index) => (
                    <Buttons indexNr={index} kategori={categori} />
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
