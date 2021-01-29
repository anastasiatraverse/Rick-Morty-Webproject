import React from "react";
import { ReactComponent as RickMortylogo } from "../../assets/Logo.svg";
import "./App.scss";
import Tag from "../../Tag";
import Portfolio from "../../Portfolio";

function App() {
  return (
    <div className="App">
      <h1>
        <span>surf the</span>
        <RickMortylogo />
        <span> universe</span>
      </h1>
      <div className="App__searchField">
        <input placeholder="Search by name" className="App__input" />
        <button className="App__button">Find Character</button>
      </div>
      <div className="App__select">
        <div className="App__selectedOption">
          <div className="App__label" />
        </div>
      </div>
      <div className="App__portfolio">
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
