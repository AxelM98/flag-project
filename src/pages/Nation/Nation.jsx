import React from "react";
import "./nation.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Nation = () => {
  return (
    <div className="nation">
      <div className="top">
        <span>
          <ArrowBackIcon style={{ color: "white" }} />
          BACK
        </span>
      </div>
      <div className="bottom">
        <div className="imgContainer">
          <div className="imgWrapper">
            <img src="https://flagcdn.com/de.svg" alt="German Flag" />
          </div>
        </div>
        <div className="detailsContainer">
          <h1>Germany</h1>
          <div className="details">
            <div className="detailsRight">
              <p>
                {" "}
                <strong>Population:</strong> 83240525
              </p>
              <p>
                <strong>Region:</strong> Europe
              </p>
              <p>
                <strong>Capital:</strong> Berlin
              </p>
              <p>
                <strong>Native name:</strong> Deutschland
              </p>
            </div>
            <div className="detailsLeft">
              <p>
                <strong>Top Level Domain:</strong> .de
              </p>
              <p>
                <strong>Currencies:</strong> Euro
              </p>
              <p>
                <strong>Language:</strong> German
              </p>
            </div>
          </div>
          <div className="borderCountries">
            <h2>Border Countries:</h2>
            <div className="borderCountriesBtnsContainer">
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
              <button>AUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nation;
