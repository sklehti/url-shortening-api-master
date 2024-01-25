import React from "react";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer-layout">
      <div className="column-1">
        <h2 className="footer-title">Shortly</h2>
      </div>
      <div className="column-2">
        <h4>Features</h4>
        <div style={{ paddingBottom: "10px" }}>
          <a>Link Shortening</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a>Branded Links</a>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <a>Analytics</a>
        </div>
      </div>
      <div className="column-3">
        <h4>Resources</h4>
        <div style={{ paddingBottom: "10px" }}>
          <a>Blog</a>
        </div>

        <div style={{ paddingBottom: "10px" }}>
          <a>Developers</a>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <a>Support</a>
        </div>
      </div>
      <div className="column-4">
        <h4>Company</h4>
        <div style={{ paddingBottom: "10px" }}>
          <a>About</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a>Our Team</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a>Careers</a>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <a>Contact</a>
        </div>
      </div>
      <div className="column-5">
        <img src={facebookIcon} alt="facebook icon" />
        <img src={twitterIcon} alt="twitter icon" />
        <img src={pinterestIcon} alt="pinterest icon" />
        <img src={instagramIcon} alt="instaram icon" />
      </div>
    </div>
  );
};

export default Footer;
