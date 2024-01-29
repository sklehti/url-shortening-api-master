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
    <div>
      <div className="nav-btn-desktop">
        <div className="nav-desktop-layout">
          <h1 style={{ paddingRight: "30px" }}>Shortly</h1>

          <a className="link" href="#">
            Features
          </a>

          <a className="link" href="#">
            Pricing
          </a>

          <a className="link" href="#">
            Resources
          </a>
        </div>

        <div className="nav-desktop-layout">
          <a className="link" href="#">
            Login
          </a>

          <div style={{ margin: "-5px 0 0 20px" }}>
            <button
              className="get-started-btn sign-up-btn-desktop link"
              style={{ color: "#fff" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Headers;
