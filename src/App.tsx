import React, { useEffect } from "react";
import "./styles.css";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import Headers from "./components/Headers";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(incrementByAmount(10));
  }, []);

  console.log(count);

  return (
    <div className="container">
      {/*  {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      -------------------------- */}
      <Headers />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
