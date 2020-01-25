import React from "react";
import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/class/" component={ClassPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
