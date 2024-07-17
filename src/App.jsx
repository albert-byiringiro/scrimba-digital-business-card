import React from 'react';
import Info from "./components/Info";
import Interests from "./components/Interests";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid items-center justify-center min-h-screen bg-[#1d1c1c] rounded-lg px-8">
      <div className="bg-white p-8 rounded shadow-lg w-96 relative">
      <Info />
      <About/>
      <Interests/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
