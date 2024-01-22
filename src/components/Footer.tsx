import React from "react";
import facebookIcon from "../images/icon-facebook.svg";

const Footer = () => {
  return (
    <div className="footer-layout">
      <div className="column-1">
        <h2 className="footer-title">Shortly</h2>
      </div>
      <div className="column-2">
        <h4>Features</h4>
        <div>
          <a>Link Shortening</a>
        </div>
        <div>
          <a>Branded Links</a>
        </div>
        <div>
          <a>Analytics</a>
        </div>
      </div>
      <div className="column-3">
        <h4>Resources</h4>
        <div>
          <a>Blog</a>
        </div>

        <div>
          <a>Bevelopers</a>
        </div>

        <div>
          <a>Support</a>
        </div>
      </div>
      <div className="column-4">
        <h4>Company</h4>
        <div>
          <a>About</a>
        </div>
        <div>
          <a>Our Team</a>
        </div>
        <div>
          <a>Careers</a>
        </div>
        <div>
          <a>Contact</a>
        </div>
      </div>
      <div className="column-5">
        <img src={facebookIcon} alt="facebook icon" />
      </div>
    </div>
  );
};

export default Footer;
