import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
   setVisitedCountries([...visitedCountries, country]);
  }



  return (
    <>
      <h2>Countries lenght: {countries.length}</h2>
      <h3>Top 10 Visited Countries: {visitedCountries.length} </h3>
      <div className="countries-container">

        <ol>
          {
            visitedCountries.map(country => (
              <li key={country.ccn3.ccn3}>
                {country.name.common}
              </li>
            ))
          }
        </ol>

        <ul className="country-list">

          {countries.slice(0, 10).map((country) => (
            <Country

              key={country.ccn3.ccn3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
            >

            </Country>
          ))}

        </ul>
      </div>
    </>
  );
};

export default Countries;
