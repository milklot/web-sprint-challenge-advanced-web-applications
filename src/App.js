import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  //console.log("codegrade setup");
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute