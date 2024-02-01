import React from "react";
import "./styles.css";

import Headers from "./components/Headers";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Headers />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
