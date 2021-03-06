import React from "react";
import "./App.scss";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/login";
import { auth, createUserProfileDocument } from "./firebase/utils";

export default class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}
