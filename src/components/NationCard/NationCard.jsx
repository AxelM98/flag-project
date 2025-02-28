import React from "react";
import "./nationCard.scss";

const NationCard = () => {
  return (
    <div className="nationCard">
      <div className="imgContainer">
        <img src="https://flagcdn.com/w320/de.png" alt="German Flag" />
      </div>
      <div className="detailsContainer">
        <p>Germany</p>
        <p>Population: 83240525 </p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
      </div>
    </div>
  );
};

export default NationCard;
