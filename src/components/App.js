import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";

// styles
// import "./index.scss";
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <p> hi7</p>
      <Router>
        <Switch>
          {/* <Route exact path="/:" component={Wrapper} />
        <Route path="/*" component={Wrapper} /> */}

          <Route component={Wrapper} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
