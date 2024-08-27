import React from "react";
import "./main.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./home";

const Main: React.FC = () => {
  return (
    <div className="main-content">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;
