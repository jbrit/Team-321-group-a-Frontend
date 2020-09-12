import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from './pages/forgot-password/forgot-password.page';
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

import './App.css';

function App() {

    return (
      <div>
         <Switch>
         <Route path="/home" component={HomePage} />
         <Route path="/forpass" component={forgotPasswordPage} />
         <Route  path="/" component={SignInAndSignUp} />
       </Switch>
      </div>
    );
}

export default App;
