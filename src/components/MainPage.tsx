import React from "react";
import firstImgMobile from "../images/illustration-working-mobile.svg";
import firstImg from "../images/illustration-working.svg";
import brandRegocnition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";
import bgShortenMobile from "./../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "./../images/bg-shorten-desktop.svg";
import bgBoostMobile from "./../images/bg-boost-mobile.svg";
import bgBoostDesktop from "./../images/bg-boost-desktop.svg";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { openMenu, closeMenu } from "../features/hamburgermenuSlice";

const MainPage = () => {
  const menuOpen = useAppSelector((state) => state.hamburgermenu.value);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLInputElement>(null);

  const handleUrlShorten = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Lyhennä ulr osoite täällä.");
  };

  const closeModal = (e: React.MouseEvent) => {
    if (ref.current === e.target) {
      dispatch(closeMenu());
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {menuOpen === true ? (
        <div onClick={closeModal} ref={ref} className="modal-bg">
          <div id="navigation-mobile" className="navigation-mobile">
            <h3>
              <a>Features</a>
            </h3>

            <h3>
              <a>Pricing</a>
            </h3>

            <h3>
              <a>Resources</a>
            </h3>

            <hr />

            <h3>
              <a>Login</a>
            </h3>

            <button
              className="get-started-btn"
              style={{ padding: "15px", width: "80%", fontSize: "20px" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <img
        className="first-img"
        src={firstImgMobile}
        alt="person behind the desk."
      />
      <div className="first-section-desktop">
        <div className="first-section-mobile">
          <h2 className="main-title">More than just shorter links</h2>
          <p className="desktop-p">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="get-started-btn">Get started</button>
        </div>

        <img
          className="first-img-desktop"
          src={firstImg}
          alt="person behind the desk."
        />
      </div>
      <div className="page-info-part-layout">
        <div className="page-info-part-layout-div">
          <form className="shorten-form" onSubmit={handleUrlShorten}>
            <img
              className="bg-shorten-mobile"
              src={bgShortenMobile}
              alt="shorten background"
            />
            <img
              className="bg-shorten-desktop"
              src={bgShortenDesktop}
              alt="shorten background"
            />
            <input
              className="shorten-it-input"
              placeholder="Shorten  link here..."
            />
            <button type="submit" className="shorten-it-btn">
              Shorten It!
            </button>
          </form>
        </div>

        <div
          className="advanced-statistic-desktop"
          style={{ paddingBottom: "100px" }}
        >
          <h2 className="smaller-title">Advanced statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="info-container">
          <div className="info-container-div info-container-div-1">
            <div className="info-layout">
              <div className="icon-layout">
                <img src={brandRegocnition} alt="brand regognition" />
              </div>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </div>
          </div>
          <div className="blue-line"></div>

          <div className="info-container-div info-container-div-2">
            <div className="info-layout">
              <div className="icon-layout">
                <img src={detailedRecords} alt="brand regognition" />
              </div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where peole engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div className="blue-line"></div>

          <div className="info-container-div info-container-div-3">
            <div className="info-layout">
              <div className="icon-layout">
                <img src={fullyCustomizable} alt="brand regognition" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverablity through
                customizable links, subercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-boost-layout">
        <img
          className="bg-boost-mobile"
          src={bgBoostMobile}
          alt="boost background"
        />
        <img
          className="bg-boost-desktop"
          src={bgBoostDesktop}
          alt="boost background"
        />
        <div className="bg-boost-layout-div">
          <h2 style={{ color: "#fff" }}>Boost your links today</h2>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
