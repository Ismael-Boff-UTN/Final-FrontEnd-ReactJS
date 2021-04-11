import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Link } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  const { nombre, img } = useSelector((state) => state.auth.resto);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a class="navbar-brand" href="#!">
        <img
          src="https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png"
          width="60"
          height="60"
          alt="logo"
        />
        &nbsp; El Buen Sabor
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-4"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-auto" id="navbar-list-4">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={img}
                width="40"
                height="40"
                class="rounded-circle"
                alt="profilePicture"
              />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-header" href="#!">
                Hola {nombre} !
              </a>
              <div class="dropdown-divider"></div>
              <Link to="/userProfile">
                <a class="dropdown-item" href="#!">
                  <img
                    src="https://img.icons8.com/nolan/30/view-file.png"
                    alt="profile"
                  />
                  &nbsp;Ver Mi Perfil
                </a>
              </Link>

              <a class="dropdown-item" onClick={handleLogout} href="#!">
                <img
                  src="https://img.icons8.com/nolan/30/logout-rounded.png"
                  alt="logout"
                />
                &nbsp;Cerrar Sesión
              </a>
            </div>
            <div class="menu"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
