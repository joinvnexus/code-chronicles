import React from 'react';
import { Suspense } from 'react';
import Countries from './countries/countries'
import './app2.css'

const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());


const app2 = () => {
    return (
        <div>
            <h1>react learn api call</h1>
            <Suspense fallback={ <div>loading......</div> }>

            <Countries

            CountriesPromise={fetchCountries}
            
            
            />
            
            </Suspense>
            
        </div>
    );
};

export default app2;