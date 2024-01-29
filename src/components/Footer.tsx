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
          <a className="link">Link Shortening</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a className="link">Branded Links</a>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <a className="link">Analytics</a>
        </div>
      </div>
      <div className="column-3">
        <h4>Resources</h4>
        <div style={{ paddingBottom: "10px" }}>
          <a className="link">Blog</a>
        </div>

        <div style={{ paddingBottom: "10px" }}>
          <a className="link">Developers</a>
        </div>

        <div style={{ paddingBottom: "20px" }}>
          <a className="link">Support</a>
        </div>
      </div>
      <div className="column-4">
        <h4>Company</h4>
        <div style={{ paddingBottom: "10px" }}>
          <a className="link">About</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a className="link">Our Team</a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a className="link">Careers</a>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <a className="link">Contact</a>
        </div>
      </div>
      <div className="column-5">
        <a className="link">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a className="link">
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a className="link">
          <img src={pinterestIcon} alt="pinterest icon" />
        </a>
        <a className="link">
          <img src={instagramIcon} alt="instagram icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
