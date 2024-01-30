import React, { useEffect } from "react";
import "./styles.css";

import Headers from "./components/Headers";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      {/*  <div>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        --------------------------
      </div> */}
      <Headers />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
