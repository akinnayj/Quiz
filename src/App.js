import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Quizzes from "./Quizzes";
import Buttons from "./Buttons.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Countdown from "react-countdown";

function counter() {
  const Counter = () => <span>Game over!</span>;

  ReactDOM.render(
    <Countdown date={Date.now() + 3000}>
      <Quizzes />
    </Countdown>,
    document.getElementById("root")
  );
}

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
