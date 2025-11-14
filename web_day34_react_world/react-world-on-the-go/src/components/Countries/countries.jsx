import React, { use, useState } from "react";
import Country from "../Country/Country";
// import Wishlisted from "../Wishlist/Wishlist";


const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [Wishlist, setWishlist] = useState([]);


  // Add visited country
  const handleVisitedCountries = (country) => {
    if (!visitedCountries.includes(country)) {
      setVisitedCountries([...visitedCountries, country]);
    }
  }

  // Add to wishlist
  const handleWishlist = (flag) => {
    if (!Wishlist.includes(flag)) {
      setWishlist([...Wishlist, flag]);
    }
  }

  return (
    <>
      <h2>Countries lenght: {countries.length} || Visited</h2>
      <h3>Visited Countries: {visitedCountries.length} </h3>
      <div className="countries-container">

        {/* Visited Country List */}

        <ol>
          {
            visitedCountries.map(country => (
              <li key={country.ccn3.ccn3}>
                {country.name.common}
              </li>
            ))
          }
        </ol>

        <hr />
        <div>
          <h3>Wishlist</h3>
       {
        Wishlist.map( (flag, index) => <img key={index} src={flag} alt={flag} width="100" />) 
       }

        </div>

        {/* <Wishlisted wishlist={handleWishlist}></Wishlisted> */}
        <hr />




        <ul className="country-list">

          {countries.slice(0, 10).map((country) => (
            <Country

              key={country.ccn3.ccn3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
              handleWishlist={handleWishlist}
            >

            </Country>
          ))}

        </ul>
        <hr />

      </div>
    </>
  );
};

export default Countries;
