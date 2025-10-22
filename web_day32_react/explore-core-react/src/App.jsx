import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Learning2 from "./page/Learning2";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* Navigation Menu */}
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link   to="/">Home</Link>
        <Link to="/Learning2">Learning2</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Learning2" element={<Learning2 />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
