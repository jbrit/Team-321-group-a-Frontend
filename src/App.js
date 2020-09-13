import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.page";
import forgotPasswordPage from './pages/forgot-password/forgot-password.page';
import SignUp from './pages/sign-up/sign-up.page';
import SignIn from './pages/sign-in/sign-in.page';
import Footer from "./components/footer/footer.component";


export default function App() {

  return (
    <div>
      
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/forgotpass" component={forgotPasswordPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>

      <Footer />
    </div>
  );


}