import { Suspense, useEffect } from "react"
// import Friends from "./components/friends"
// import Posts from './components/Posts'
import './App.css'
// import Team from './components/Team'
import UserCard from './components/pratice/userCard'

// const fetchusers = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
//   return res.json();

// }
// const users = fetchusers();

// console.log(users)


// const fetchposts = async() => {
//   const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
//   return response.json();
// }

// const post = fetchposts();

// console.log(post)

const loadData = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const users = loadData();


const App = () => {


  
  return (
    <div>
      <h1>App</h1>


      {/* <Team/> */}
      {/* <Suspense fallback={<div className="loaders"> </div>}>
      
        <Friends friendsPromise={users} />

         <Posts postPromise={post}></Posts>
       
      </Suspense> */}
      <Suspense fallback={<div className="loaders"> </div>}>
        <UserCard userPromise={users} />
      </Suspense>

     
    </div>
  )
}

export default App;