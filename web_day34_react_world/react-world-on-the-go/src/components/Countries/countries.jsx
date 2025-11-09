import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  return (
    <div className="countries-container">
      <ul className="country-list">
        {countries.slice(0,10).map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
