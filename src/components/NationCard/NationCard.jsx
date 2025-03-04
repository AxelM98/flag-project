import React from "react";
import "./nationCard.scss";
import { Link } from "react-router-dom";

const NationCard = ({ nation }) => {
  return (
    <Link className="link" to={`nation/${nation.cca3}`}>
      <div className="nationCard">
        <>
          <div className="imgContainer">
            <img
              src={`${nation.flags.png}`}
              alt={`${nation.name.common} flag`}
            />
          </div>
          <div className="detailsContainer">
            <p>{nation.name.common}</p>
            <p>Population: {nation.population.toLocaleString()}</p>
            <p>Region: {nation.region}</p>
            <p>Capital: {nation.capital?.[0] || "No capital"}</p>
          </div>
        </>
      </div>
    </Link>
  );
};

export default NationCard;
