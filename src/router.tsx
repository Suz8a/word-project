import { Switch, Route } from "react-router-dom";
import GamePage from "./pages/game-page";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/word-project/" component={GamePage} />
    </Switch>
  );
};
