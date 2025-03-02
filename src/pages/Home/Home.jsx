import React from "react";
import "./home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectRegionBar from "../../components/SelectRegionBar/SelectRegionBar";
import NationCard from "../../components/NationCard/NationCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const nations = useLoaderData();
  return (
    <div className="mainConatainer">
      <div className="wrapper">
        <div className="topWrapper">
          <SearchBar />
          <SelectRegionBar />
        </div>
        <div className="cardsWrapper">
          {nations.map((nation, i) => (
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
