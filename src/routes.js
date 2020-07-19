import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { menuItems } from "./utils";
export const MainRoutes = () => (
  <HashRouter>
    <Switch>
      {menuItems().map(({ path, component }) => (
        <Route exact path={path} component={component} />
      ))}
    </Switch>
  </HashRouter>
);
