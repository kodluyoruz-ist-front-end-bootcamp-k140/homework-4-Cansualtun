import "./App.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer/Footer";
import Chart from "./Components/Chart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Chart" element={<Chart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
