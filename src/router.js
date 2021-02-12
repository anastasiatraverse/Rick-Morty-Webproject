import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import DetailedUser from "./Pages/DetailedUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="*">
          <div>
            <Switch>
              <Route exact path="/character/:id">
                <DetailedUser />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
