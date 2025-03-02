import React from "react";
import "./nation.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLoaderData } from "react-router-dom";

const Nation = () => {
  /* const params = useParams()
  const id = params.id */

  const nationDetails = useLoaderData();
  console.log(nationDetails);

  return (
    <div className="nation">
      <div className="top">
        <Link to="/" className="backBtn">
          <ArrowBackIcon style={{ color: "white" }} />
          BACK
        </Link>
      </div>
      <div className="bottom">
        <div className="imgContainer">
          <div className="imgWrapper">
            <img
              src={`${nationDetails[0].flags.png}`}
              alt={`${nationDetails[0].name.common} flag`}
            />
          </div>
        </div>
        <div className="detailsContainer">
          <h1>{nationDetails[0].name.common}</h1>
          <div className="details">
            <div className="detailsRight">
              <p>
                {" "}
                <strong>Population:</strong>{" "}
                {nationDetails[0].population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {nationDetails[0].region}
              </p>
              <p>
                <strong>Capital:</strong>{" "}
                {nationDetails[0].capital?.[0] || "No capital"}
              </p>
              <p>
                <strong>Native name:</strong> Deutchland
              </p>
            </div>
            <div className="detailsLeft">
              <p>
                <strong>Top Level Domain:</strong> {nationDetails[0].tld}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {nationDetails[0].currencies
                  ? Object.values(nationDetails[0].currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "No currency available"}
              </p>
              <p>
                <strong>Language:</strong> German
              </p>
            </div>
          </div>
          <div className="borderCountries">
            <h2>Border Countries:</h2>
            <div className="borderCountriesBtnsContainer">
              {nationDetails[0].borders ? (
                nationDetails[0].borders.map((border) => {
                  return <button>{border}</button>;
                })
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const nationDetailsLoader = async ({ params }) => {
  const { name } = params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  return res.json();
};

export default Nation;
