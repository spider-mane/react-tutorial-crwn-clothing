import React from "react";
import ShopPage from "./pages/shop/shop";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
