import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SignupLogin from "./components/SignupLogin";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<SignupLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
