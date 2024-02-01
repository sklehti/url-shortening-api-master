import React from "react";

const Modal = () => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p
          style={{
            color: "hsl(257, 27%, 26%",
            fontSize: "24px",
            fontWeight: "800",
          }}
        >
          The active buttons in this exercise app are the Shorten it! and Copy
          -buttons.
        </p>

        <p
          style={{
            lineHeight: 1,
            color: "hsl(257, 27%, 26%",
            fontWeight: "800",
          }}
        >
          Shorten it! - Shorten any valid URL
        </p>
        <p
          style={{
            lineHeight: 0,
            color: "hsl(257, 27%, 26%",
            fontWeight: "800",
          }}
        >
          Copy - Copy the shortened link to their clipboard in a single click
        </p>
      </div>
    </div>
  );
};

export default Modal;
