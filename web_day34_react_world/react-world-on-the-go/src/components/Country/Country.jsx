import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // optional: install with `npm install react-icons`

const Country = ({ country, handleVisitedCountries, handleWishlist }) => {

  const [showDetails, setShowDetails] = useState(false);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);

    handleVisitedCountries(country);
  };


  const currencyObj = country.currencies?.currencies;

  const currencyKey = currencyObj ? Object.keys(currencyObj)[0] : null;
  const currency = currencyKey ? currencyObj[currencyKey] : null;

  const languagesObj = country.languages?.languages;
  const languages = languagesObj
    ? Object.values(languagesObj).join(", ")
    : "N/A";

  return (
    <li className="country-card">
      <div className="card-header" onClick={() => setShowDetails(!showDetails)}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h2>{country.name.common}</h2>
        <button className="toggle-btn">
          {showDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {showDetails && (
        <div className="card-details">
          <p>
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.capital?.[0]}
          </p>
          <p>
            <strong>Region:</strong> {country.region?.region}
          </p>
          <p>
            <strong>Continent:</strong> {country.continents?.continents?.[0]}
          </p>
          <p>
            <strong>Area:</strong> {country.area.area} km²{" "}
            {country.area.area > 300000 ? "(large)" : "(small)"}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {country.population.population.toLocaleString()}
          </p>
          <p>
            <strong>Currency:</strong>{" "}
            {currency ? `${currency.name} (${currency.symbol})` : "N/A"}
          </p>
          <p>
            <strong>Languages:</strong> {languages}
          </p>
          <p>
            <strong>Country Code:</strong> {country.cca3.cca3}
          </p>
          <p>
            <strong>Numeric Code:</strong> {country.ccn3.ccn3}
          </p>
          <button
            className={`visit-btn ${visited ? "visited" : " not-visited"}`}
            onClick={handleVisited}
          >
            {visited ? `Visited (${country.name.common} ) ` : "Not Visited"}
          </button>


          {/* <button className="visit-btn">
            <a
              href={`https://en.wikipedia.org/wiki/${country.name.common}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </button> */}
          <button className="visit-btn"
            onClick={() => {
              handleWishlist(country.flags.flags.png);
            }}
          >Add to Wishlist</button>
        </div>
      )}
    </li>
  );
};

export default Country;
