import "./App.scss";
import NationCard from "./components/NationCard/NationCard";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import SelectRegionBar from "./components/SelectRegionBar/SelectRegionBar";

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
