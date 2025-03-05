import React, { useEffect, useState } from "react";
import "./home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectRegionBar from "../../components/SelectRegionBar/SelectRegionBar";
import NationCard from "../../components/NationCard/NationCard";
import Skeleton from "../../components/Skeleton/Skeleton";
//import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [loading, setLoading] = useState(true);
  const [nations, setNations] = useState([]);

  /* const nations = useLoaderData(); */

  useEffect(() => {
    const fetchNations = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setNations(data);
      } catch (error) {
        console.error("Error fetching nations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNations();
  }, []);

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
        {loading ? (
          <div className="cardsWrapper">
            {[...Array(10)].map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="cardsWrapper">
            {filteredNations.map((nation, i) => (
              <NationCard key={i} nation={nation} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* export const nationsLoader = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}; */

export default Home;
