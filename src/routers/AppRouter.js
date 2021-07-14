import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Screen } from "../components/UI/Screen";
import { CharacterScreen } from "../components/character/CharacterScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Header } from "../components/UI/Header";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/screen/:id" component={ Screen } />
          <Route exact path="/search" component={ SearchScreen } />
          <Route exact path="/character/:id" component={ CharacterScreen } />
          <Redirect to='/screen/breaking bad' />
        </Switch>
      </div>
    </Router>
  )
}
