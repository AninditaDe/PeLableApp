import React from "react";
import { Route, Switch } from 'react-router-dom';
import ForgotPswd from "../Pages/ForgotPswd";

export default function RenderPage() {
  return (
    <div>
      <Switch>
        <Route path="/">
         
        </Route>
        <Route path="/">
          <ForgotPswd />
        </Route>
      </Switch>
    </div>
  );
}