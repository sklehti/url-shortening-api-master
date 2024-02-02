import React, { useEffect } from "react";
import "./styles.css";

import Headers from "./components/Headers";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import { allLinks } from "./features/allLinksSlice";

interface State {
  shortenLink: string;
  originalLink: string;
}

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("links")) {
      const storedLinks: State[] = JSON.parse(
        localStorage.getItem("links") || "null"
      );

      storedLinks.map((l) => {
        if (l.shortenLink && l.originalLink) {
          dispatch(
            allLinks({
              values: {
                shortenLink: l.shortenLink,
                originalLink: l.originalLink,
              },
            })
          );
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <Headers />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
