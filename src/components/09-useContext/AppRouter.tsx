import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AbountScreen } from "./AbountScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div className="">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={AbountScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={HomeScreen} />

            {/* Default route en caso de error */}
            {/* <Route component={HomeScreen} /> */}

            {/* En caso de no encontrar ruta correcta redirecciona a la raiz */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
