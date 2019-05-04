import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SoccerPage from "./components/layout/SoccerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SoccerPage />
      <Footer />
    </div>
  );
}

export default App;
