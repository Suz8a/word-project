import { Switch, Route } from "react-router-dom";
import GamePage from "./pages/game-page";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={GamePage} />
    </Switch>
  );
};
