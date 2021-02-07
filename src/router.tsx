import { Switch, Route } from "react-router-dom";
import GamePage from "./pages/game-page";
import MenuPage from "./pages/menu-page";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={MenuPage} />
      <Route path="/game" component={GamePage} />
    </Switch>
  );
};
