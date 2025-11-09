import Countries from './components/Countries/countries'
import './App.css'
import { Suspense } from 'react'



// api call
const CountriesFetch = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());
// const CountriesData = CountriesFetch();

function App() {


  return (
    <>

      <h1> React world on the go </h1>
      <Suspense fallback={<div className='loading'>Loading countries...</div>}>

        <Countries CountriesPromise={CountriesFetch} />
      </Suspense>

    </>
  )
}

export default App
