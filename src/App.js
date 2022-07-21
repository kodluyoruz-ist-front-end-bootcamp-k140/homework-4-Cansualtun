import "./App.css";
import Home from "./Components/Home";
import Product from "../src/Components/Product/Product";
import Contact from "./Components/Contact";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import ErrorPage from "./Components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
