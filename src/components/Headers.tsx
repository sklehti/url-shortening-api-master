import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { openMenu, closeMenu } from "../features/hamburgermenuSlice";

const Headers = () => {
  const menuOpen = useAppSelector((state) => state.hamburgermenu.value);
  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    if (menuOpen === false) {
      dispatch(openMenu());
    } else if (menuOpen === true) {
      dispatch(closeMenu());
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
