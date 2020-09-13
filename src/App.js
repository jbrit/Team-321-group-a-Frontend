import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from './pages/forgot-password/forgot-password.page';


import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/forgotpass" component={forgotPasswordPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );


export default App;
