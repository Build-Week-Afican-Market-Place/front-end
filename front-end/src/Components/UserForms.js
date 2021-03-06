import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm"
import { Route , NavLink , Switch} from "react-router-dom"

export default function LogIn() {
 

  return (
    <section className="UserForms">
      <Switch>
        <Route path="/signup">
            <SignupForm/>
        </Route>

        <Route path="/login">
            <LoginForm/>
        </Route>
      </Switch>
   <NavLink to ="/signup">New User? | Signup</NavLink>
   <br></br>
   <NavLink to ="/login">Returning User? | Login</NavLink>
   </section>
  );
}
