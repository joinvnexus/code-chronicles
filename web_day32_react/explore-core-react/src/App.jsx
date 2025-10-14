
// import './index.css'
import Condation from './components/condition.jsx';
import UserCard from './components/UserCard.jsx'
function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Condation />
      <UserCard name="Projoy" age={20} email="Ijv6T@example.com" />
      <UserCard name="Riya" age={25} />


    </>
  )
}




export default App