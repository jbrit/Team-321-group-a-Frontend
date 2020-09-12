import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.page";
import SignIn from "./pages/sign-in/sign-in.page";
import SignUp from "./pages/sign-up/sign-up.page";
import forgotPasswordPage from './pages/forgot-password/forgot-password.page';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/forpass" component={forgotPasswordPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
