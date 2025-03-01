import React from "react";
import "./home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectRegionBar from "../../components/SelectRegionBar/SelectRegionBar";
import NationCard from "../../components/NationCard/NationCard";

const Home = () => {
  return (
    <div className="mainConatainer">
      <div className="wrapper">
        <div className="topWrapper">
          <SearchBar />
          <SelectRegionBar />
        </div>
        <div className="cardsWrapper">
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
          <NationCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
