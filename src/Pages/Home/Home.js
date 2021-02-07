import React from "react";
import "./Home.scss";
import CardsList from "../../Components/CardsList";
import Select from "../../Components/Select";
import Search from "../../Components/Search";
import { useState, useEffect } from "react";
import { getCharacters } from "../../API";
import { useCallback } from "react/cjs/react.production.min";
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";

function Home() {
  const [name, setCharacterName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState("");

  const statusOptions = [
    { value: "", label: "All Status" },
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
  ];
  const gendersOptions = [
    { value: "", label: "All Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const loadCharacters = async (params) => {
    try {
      const items = await getCharacters(params);
      setCharacters(items?.results);
    } catch (e) {
      console.log("Error", e);
    }
  };

  console.log(characters);
  useEffect(() => {
    loadCharacters({
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    }).then((r) => r);
  }, [name, gender, status]);

  return (
    <div className="Home">
      <Header className="Home__header" />
      <Search
        className="Home__searchField"
        setValue={setCharacterName}
        value={name}
      />
      <div className="Home__filters">
        <Select
          label="Status"
          value={status}
          handleSelect={setStatus}
          options={statusOptions}
        />
        <Select
          label="Gender"
          value={gender}
          handleSelect={setGender}
          options={gendersOptions}
        />
      </div>
      <div className="Home__portfolio">
        <CardsList charactersList={characters} />
      </div>
    </div>
  );
}

export default Home;
