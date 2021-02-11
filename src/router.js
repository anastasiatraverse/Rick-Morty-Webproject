import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import DetailedUser from "./Pages/DetailedUser";

import character from "./assets/json/stubCharacters.json";

const Router = () => {
  // TODO: remove code if it's unneeded.
  
  // const characterList = character.results;
  // const getCharacterById = (id) => {
  //   // console.log(id);
  //   // console.log(characterList);
  //   return characterList.find((character) => character.id === id);
  // };

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
