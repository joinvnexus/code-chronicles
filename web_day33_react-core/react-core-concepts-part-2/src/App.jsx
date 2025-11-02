import { Suspense } from "react"
import Friends from "./components/friends"
import './App.css'

const fetchusers = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  return res.json();

}
const users = fetchusers();


const App = () => {
  
  return (
    <div>
      <h1>App</h1>
      <Suspense fallback={<div className="loaders"> loading...</div>}>
      
        <Friends friendsPromise={users} />
       
      </Suspense>
    </div>
  )
}

export default App;