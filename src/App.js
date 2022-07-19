import "./App.css";
import Home from "./Components/Home";
import Product from "../src/Components/Product/Product";
import Contact from "./Components/Contact";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Chart from "../src/Components/Chart/Chart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Chart" element={<Chart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
