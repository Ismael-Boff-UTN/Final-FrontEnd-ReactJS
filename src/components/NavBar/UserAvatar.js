import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

export const UserAvatar = () => {
  const { nombre, img, google, apellido } = useSelector(
    (state) => state.auth.resto
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const logout = (response) => {
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
          width="55"
          height="55"
          className="rounded-circle"
          alt="profilePicture"
        />
        <span className="ml-2 mr-1 text-white">{nombre + " " + apellido}</span>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <p className="dropdown-header text-dark text-center">Hola {nombre} !</p>
        <div className="dropdown-divider"></div>
        <Link to="/userProfile">
          <button type="button" className="btn dropdown-item">
            <img
              src="assets/images/profile.svg"
              alt="profile"
              style={{ maxHeight: "23px", maxWidth: "23px" }}
            />
            &nbsp;Ver Mi Perfil
          </button>
        </Link>

        {google ? (
          <GoogleLogout
            clientId="1068418280364-qlcmg4k58169if3h5jis6plnfmvml8e8.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                type="button"
                className="btn dropdown-item"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src="assets/images/logout.svg"
                  alt="logout"
                  style={{ maxHeight: "23px", maxWidth: "23px" }}
                />
                &nbsp;Cerrar Sesión
              </button>
            )}
            buttonText="Cerrar Sesión"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        ) : (
          <button className="dropdown-item" onClick={handleLogout}>
            <img
              src="assets/images/logout.svg"
              alt="logout"
              style={{ maxHeight: "23px", maxWidth: "23px" }}
            />
            &nbsp;Cerrar Sesión
          </button>
        )}
      </div>

      <div className="menu"></div>
    </li>
  );
};
