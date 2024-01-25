import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { openMenu, closeMenu } from "../features/hamburgermenuSlice";

const Headers = () => {
  const menuOpen = useAppSelector((state) => state.hamburgermenu.value);
  const dispatch = useAppDispatch();

  const navigationModal: HTMLElement | null =
    document.getElementById("navigation-mobile");

  const handleNavigation = () => {
    if (navigationModal) {
      console.log("Otsikot tänne.");

      dispatch(openMenu());

      // navigationModal.style.display = "initial";
    }
  };

  return (
    <div className="header-layout">
      <div>
        <h1>Shortly</h1>
      </div>
      <button onClick={handleNavigation} className="nav-button">
        <div className="nav-mobile-1"></div>
        <div className="nav-mobile-2"></div>
        <div className="nav-mobile-1"></div>
        <div className="nav-mobile-2"></div>
        <div className="nav-mobile-1"></div>
      </button>
    </div>
  );
};

export default Headers;
