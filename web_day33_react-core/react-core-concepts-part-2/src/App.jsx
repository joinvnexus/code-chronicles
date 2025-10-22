
import './App.css'

function App() {
  function handleClick() {
    alert('clicked')
  }
  const handleClick3 = () => {
    alert('clicked3')
  }

  const handleNumber = (num) =>{
    const result = num + 5
    // return result
    alert(result)
  }
  return (
    <>

      <h1>Vite + React</h1>
      {/* <button onClick="handleClick()">Click me</button> */}

      {/* normal function */}
      <button onClick={handleClick}>Click me</button>


      {/* anonymous function */}
      <button onClick={function handleClick2() {
        alert('clicked2')

      }}>Click me2</button>

      {/* //arrow function */}
      <button onClick={handleClick3}>Click me3</button>

      {/* arrow function*/}
      <button onClick={() => alert('clicked4')}>Click me4</button>

      <button onClick={() => handleNumber(5)}>Click me5</button>

    </>
  )
}

export default App
