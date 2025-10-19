import Condation from './components/condition.jsx';
import UserCard from './components/UserCard.jsx';
import Welcome from './components/welcome.jsx';
import ProfileCard from './page/ProfileCard.jsx';
import ProductCard from './page/ProductCard.jsx';
import Counter from './components/Counter.jsx'
import FormExample from './components/from.jsx';
import UserList from './components/UserList.jsx';
import Learn from './components/learn.jsx';
import MyInfo from './components/MyInfo.jsx';
import UserCard2 from './components/UserCard2.jsx';
import ProductCard2 from './components/ProductCard2.jsx';
import Increment from './components/increment.jsx';
import ToggleButton from './components/ToggleButton.jsx';
import LikesToggle from './components/Likes.jsx';
import Todos from './components/Todo.jsx';
import LoginStatus from './components/LoginStatus.jsx';
import Message from './components/if-else.jsx';
import Greeting from './components/Greeting.jsx';
import Discount from './components/Discount.jsx';



function App() {
  const time = 50;
  return (
    <>
      <h1 className="text-4xl font-bold">Vite + React</h1>




      <div className="flex flex-row flex-wrap items-center justify-center px-4 py-8 gap-4">
        <Condation />
        <Welcome
          name="projoy"
        />
        <UserCard
          name=" naidu"
          age='22'
          email="9aM0b@example.com"
        />
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
        <FormExample />
        <UserList />
        <Learn />
        <MyInfo />
        <UserCard2
          name="Projoy Naidu"
          age="20"
          country="Bangladesh"
        />
        <UserCard2
          name="Riya Naidu"
          age="20"
          country="Bangladesh"
        />
        <UserCard2
          name="Rahul Naidu"
          age="20"
          country="Bangladesh"
        />
        <ProductCard2
          title="Product 1"
          price="100"
          inStock={true}
        />
        <ProductCard2
          title="Product 2"
          price="200"
          inStock={false}
        />
        <Increment />
        <ToggleButton />
        <LikesToggle />
        <Todos learning=" react" isDone={!true} />
        <Todos learning=" Javascript" isDone={true} time={time} />
        <Todos learning=" css" isDone={true} time={time} />
        <Todos learning=" html" isDone={true} time={time} />

        <div style={{ textAlign: "center" }}>
          <h1>Conditional Rendering Example</h1>
          <LoginStatus />

        </div>
        <Message />
        <Greeting />
        <Discount />
      </div>
    </>
  );
}

export default App;