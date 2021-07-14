import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Screen } from "../components/bb/Screen";
import { BetterCallScreen } from "../components/bcs/BetterCallScreen";
import { CharacterScreen } from "../components/character/CharacterScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Header } from "../components/UI/Header";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={ Screen } />
          <Route exact path="/bcs" component={ BetterCallScreen } />
          <Route exact path="/search" component={ SearchScreen } />
          <Route exact path="/character/:id" component={ CharacterScreen } />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  )
}
