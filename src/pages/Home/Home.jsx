import React, { useState } from "react";
import "./home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectRegionBar from "../../components/SelectRegionBar/SelectRegionBar";
import NationCard from "../../components/NationCard/NationCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const nations = useLoaderData();

  const filteredNations = nations.filter(
    (nation) =>
      nation.name.common.toLowerCase().includes(inputText.toLowerCase()) &&
      (selectedRegion === "All" ||
        nation.region.toLowerCase() === selectedRegion.toLowerCase())
  );

  return (
    <div className="mainConatainer">
      <div className="wrapper">
        <div className="topWrapper">
          <SearchBar setInputText={setInputText} />
          <SelectRegionBar
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
        <div className="cardsWrapper">
          {filteredNations.map((nation, i) => (
            <NationCard key={i} nation={nation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const nationsLoader = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
};

export default Home;
