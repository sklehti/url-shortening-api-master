import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { closeMenu } from "../features/hamburgermenuSlice";

const MobileNavigation = () => {
  const menuOpen = useAppSelector((state) => state.hamburgermenu.value);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLInputElement>(null);

  $(function () {
    $(".link").on("click", function () {
      $("#myModal").css("display", "block");
    });

    $(".close").on("click", function () {
      $("#myModal").css("display", "none");
    });
  });

  const closeModal = (e: React.MouseEvent) => {
    if (ref.current === e.target) {
      dispatch(closeMenu());
    }
  };

  return (
    <div>
      {menuOpen === true ? (
        <div onClick={closeModal} ref={ref} className="modal-bg">
          <div id="navigation-mobile" className="navigation-mobile">
            <h3>
              <a className="link" href="#">
                Features
              </a>
            </h3>

            <h3>
              <a className="link" href="#">
                Pricing
              </a>
            </h3>

            <h3>
              <a className="link" href="#">
                Resources
              </a>
            </h3>

            <hr className="nav-hr" />

            <h3>
              <a className="link" href="#">
                Login
              </a>
            </h3>

            {/* TODO */}
            <button
              className="get-started-btn link"
              style={{
                padding: "15px",
                width: "80%",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileNavigation;
