import React, { useEffect, useState } from "react";
import "./nation.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams /* , useLoaderData */ } from "react-router-dom";

const Nation = () => {
  const { code } = useParams();
  const [nationDetails, setNationDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNationDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setNationDetails(data);
      } catch (error) {
        console.error("Error fetching nation details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNationDetails();
  }, [code]);

  if (!nationDetails || nationDetails.length === 0) {
    return <div className="error">No data found for this country.</div>;
  }

  //const nationDetails = useLoaderData();
  // console.log(nationDetails);
  return (
    <div className="nationContainer">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="nation">
          <div className="top">
            <Link to="/" className="backBtn">
              <ArrowBackIcon className="backIcon" />
              BACK
            </Link>
          </div>
          <div className="bottom">
            <div className="imgContainer">
              <div className="imgWrapper">
                <img
                  src={nationDetails[0]?.flags?.svg || ""}
                  alt={`${nationDetails[0]?.name?.common || "Unknown"} flag`}
                />
              </div>
            </div>
            <div className="detailsContainer">
              <h1>{nationDetails[0]?.name?.common || "Unknown"}</h1>
              <div className="details">
                <div className="detailsLeft">
                  <p>
                    <strong>Population:</strong>{" "}
                    {nationDetails[0]?.population
                      ? nationDetails[0].population.toLocaleString()
                      : "Unknown"}
                  </p>
                  <p>
                    <strong>Region:</strong>{" "}
                    {nationDetails[0]?.region || "Unknown"}
                  </p>
                  <p>
                    <strong>Capital:</strong>{" "}
                    {nationDetails[0]?.capital?.[0] || "No capital"}
                  </p>
                  <p>
                    <strong>Native name:</strong>{" "}
                    {nationDetails[0]?.name?.nativeName
                      ? Object.values(nationDetails[0].name.nativeName)
                          .map((native) => native?.common)
                          .join(", ")
                      : "No native name"}
                  </p>
                </div>
                <div className="detailsRight">
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {nationDetails[0]?.tld?.[0] || "Unknown"}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {nationDetails[0]?.currencies
                      ? Object.values(nationDetails[0].currencies)
                          .map((currency) => currency?.name)
                          .join(", ")
                      : "No currencies"}
                  </p>
                  <p>
                    <strong>Language:</strong>{" "}
                    {nationDetails[0]?.languages
                      ? Object.values(nationDetails[0].languages).join(", ")
                      : "No languages"}
                  </p>
                </div>
              </div>
              <div className="borderCountries">
                <h2>Border Countries:</h2>
                <div className="borderCountriesBtnsContainer">
                  {nationDetails[0]?.borders?.length ? (
                    nationDetails[0].borders.map((border) => (
                      <Link
                        to={`/nation/${border}`}
                        key={border}
                        className="borderBtn"
                      >
                        {border}
                      </Link>
                    ))
                  ) : (
                    <p>No border countries</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* export const nationDetailsLoader = async ({ params }) => {
  const { code } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  return res.json();
};
 */
export default Nation;
