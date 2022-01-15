import React from "react";
import "../styles/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "../routes/Info";
import Home from "../routes/Home";
import AccountInfo from "../routes/AccountInfo";
import Account from "../routes/Account";
import Login from "../routes/Login";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Info></Info>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        {/* <Route path="/:id">
          <AccountInfo></AccountInfo>
        </Route> */}

        <Route exact path="/account">
          <Account></Account>
        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/accountInfo">
          <AccountInfo></AccountInfo>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
