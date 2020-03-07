import "./App.scss";
import React from "react";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
