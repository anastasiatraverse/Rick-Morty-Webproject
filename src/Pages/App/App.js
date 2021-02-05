import React from "react";
import { ReactComponent as RickMortylogo } from "../../assets/Logo.svg";
import "./App.scss";
import Tag from "../../Components/Tag";
import Select from "../../Components/Select";
import Cards from "../../Components/Cards";

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
      <div className="App__filters">
        <Select />
        <Select />
      </div>
      <div className="App__portfolio">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
