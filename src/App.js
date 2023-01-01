
import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/Topbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <div className="bg-gray-300">
    <TopBar/>
    <Navbar/>
    <Hero/>
    <Activities/>
    <Booking/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
