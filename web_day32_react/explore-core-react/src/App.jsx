
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Sports />
      <Profile />
      <Condation />

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

function Sports() {
  const player = "virat";
  return (
    <>
      <h2>my Name is a {player}</h2>
      <ul>
        <li>cricket</li>
        <li>football</li>

      </ul>

    </>
  )
}

function Profile() {
  const name = "projoy";
  const age = 20;
  return (
    <h2>my name is {name} and age is {age}</h2>
  )
}

function Condation() {
  const obj = [
    { name: "projoy", age: 20 },
    { name: "virat", age: 30 },
    { name: "rohit", age: 40 },
    { name: "rahul", age: 50 },
    { name: "dhoni", age: 60 }

  ]
  const adults = obj.filter((x) => x.age > 30);


  return (
    <>
      {/* Display adults only */}
      <h3>Adults are {adults.length}</h3>
      {
        adults.map((x) => (
          <h2>my name is {x.name} and age is {x.age}</h2>
        ))
      }


    </>


  )
}

export default App
