import React from "react";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { UserAvatar } from "./UserAvatar";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-sm">
      <Link to="/">
        <a className="navbar-brand" href="#!">
          <img
            src="assets/images/logo2.png"
            width="60"
            height="60"
            alt="logo"
          />
          &nbsp; El Buen Sabor
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-4"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbar-list-4">
        <ul className="navbar-nav">
          {/*Perfil De Usuario Dropdown*/}
          <UserAvatar />
          {/*Carrito De Compras Dropdown*/}
          <Cart />
        </ul>
      </div>
    </nav>
  );
};
