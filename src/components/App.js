import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";

// styles
// import "./index.scss";
import "../styles/index.scss";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route exact path="/:" component={Wrapper} />
        <Route path="/*" component={Wrapper} /> */}

        <Route component={Wrapper} />
      </Switch>
    </HashRouter>
  );
};

export default App;
