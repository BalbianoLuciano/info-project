import React from "react";
import "./main.css";
import MusicGenres from "./components/Layout/MusicGenres";
import ListenAgain from "./components/ListenAgain";
import Artists from "./components/Artists";
import Header from "./components/Layout/Header";
import Recommended from "./components/Recommended";
import QuickPicks from "./components/QuickPicks";
import Footer from "./components/Layout/Footer";

const Main: React.FC = () => {
  return (
    <div className="main-content">
      <Header />
      <MusicGenres />
      <ListenAgain />
      <Artists />
      <QuickPicks />
      <Recommended />
      <Footer />
      {/* Otros componentes irán aquí */}
    </div>
  );
};

export default Main;
