import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Link } from "react-router-dom";

export const UserAvatar = () => {
  const { nombre, img } = useSelector((state) => state.auth.resto);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
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
          className="rounded-circle"
          alt="profilePicture"
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <p className="dropdown-header">Hola {nombre} !</p>
        <div className="dropdown-divider"></div>
        <Link to="/userProfile">
          <button className="dropdown-item">
            <img
              src="assets/images/profile.svg"
              alt="profile"
              style={{ maxHeight: "23px", maxWidth: "23px" }}
            />
            &nbsp;Ver Mi Perfil
          </button>
        </Link>

        <button className="dropdown-item" onClick={handleLogout}>
          <img
            src="assets/images/logout.svg"
            alt="logout"
            style={{ maxHeight: "23px", maxWidth: "23px" }}
          />
          &nbsp;Cerrar Sesión
        </button>
      </div>

      <div className="menu"></div>
    </li>
  );
};
