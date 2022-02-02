import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function Header() {
  return (
    <div className="header d-flex justify-between align-center clear">
      <Link to="/">
        <div className="d-flex borderLine align-center">
          <img
            width={40}
            height={40}
            src="/img/Pizza_logo.jpg"
            className=""
            alt=""
          />
          <div className="d-flex flex-column">
            <h1 className="flex-column">React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>{" "}
          </div>
        </div>
      </Link>

      <Link to="/cart">
        <div className="cart d-flex align-center justify-center mr-50">
          <p>520 грн.</p>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 16C14.3284 16 15 15.3284 15 14.5C15 13.6716 14.3284 13 13.5 13C12.6716 13 12 13.6716 12 14.5C12 15.3284 12.6716 16 13.5 16Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.18409 4.33325H16L14.8545 9.92645C14.7922 10.2334 14.6214 10.5091 14.3721 10.7053C14.1228 10.9015 13.8109 11.0058 13.4909 10.9998H6.28409C5.95115 11.0025 5.62868 10.8861 5.37748 10.6724C5.12629 10.4587 4.96373 10.1626 4.92045 9.83978L3.88409 2.15997C3.84111 1.83947 3.68052 1.54515 3.43218 1.33177C3.18385 1.11839 2.86469 1.00049 2.53409 1H1"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>3</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
