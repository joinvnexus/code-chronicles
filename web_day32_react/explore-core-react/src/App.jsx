import Condation from './components/condition.jsx';
// import UserCard from './components/UserCard.jsx';
// import Welcome from './components/welcome.jsx';
import ProfileCard from './page/ProfileCard.jsx';
import ProductCard from './page/ProductCard.jsx';
import Counter from './components/Counter.jsx'


function App() {
  return (
    <>
      <h1 className="text-4xl font-bold">Vite + React</h1>

      <div className="flex flex-row flex-wrap items-center justify-center px-4 py-8 gap-4">
        <Condation />

        <ProfileCard
          name="Projoy Naidu"
          bio="Frontend Developer & Designer"
          image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
        />
        <ProductCard
          name="Product Name"
          des='Product Description'
          image="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
        />
        <Counter />

      </div>
    </>
  );
}

export default App;