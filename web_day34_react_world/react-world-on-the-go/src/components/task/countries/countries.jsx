import React, { use } from 'react';
import Country from '../country/country'
// import './countries.css'
const Countries = ({ CountriesPromise }) => {

    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>

            <h2>Countries lenght: {countries.length}</h2>
            <div className="countries-container">
                {
                    countries.map((country) => (

                        <Country
                            key={country.ccn3.ccn3}
                            country={country}>

                        </Country>
                    ))
                }
            </div>


        </div>
    );
};

export default Countries;