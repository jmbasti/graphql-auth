import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={Home} />:
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
export default App;
