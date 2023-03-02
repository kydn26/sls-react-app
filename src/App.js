import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import HotelInfo from "./components/HotelInfo";

function App() {
  return (
    <div>
      <Header />

      <Main>
        <Welcome />

        <HotelInfo />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
