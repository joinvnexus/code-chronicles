
import './index.css'
import Condation from './components/condition.jsx';
function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Condation/>

    </>
  )
}
function Person() {
  const name = "jane";
  const age = 20;
  return (
    <h2>my Name is a {name} and age is {age}</h2>


  )
}

export default App