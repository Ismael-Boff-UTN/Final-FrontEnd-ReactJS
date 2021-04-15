import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { GoogleLogin } from "react-google-login";
//import Swal from "sweetalert2";
import { startLogin, startLoginGoogle } from "../../actions/auth";

export const LogIn = () => {
  const responseGoogle = (response) => {
    console.log(response);

    var id_token = response.tc.id_token;

    dispatch(startLoginGoogle(id_token));
  };

  //const actualYear = new Date().getFullYear();
  const dispatch = useDispatch();

  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleInputChange = ({ target }) => {
    setFromValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(startLogin(email, password));
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Bienvenido A El Buen Sabor</h2>
                    <p>Aun No Tienes Una Cuenta?</p>
                    <Link to="/login/new-user">
                      <a href="#!" className="btn btn-white btn-outline-white">
                        Registrarse
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Iniciar Sesión</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a
                          href="#!"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-google"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmitForm} className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" for="name">
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Ej.email@gmail.com"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" for="password">
                        Contraseña
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                    <div className="form-group px-3">
                      <div className="text-center">
                        <GoogleLogin
                          clientId="1068418280364-qlcmg4k58169if3h5jis6plnfmvml8e8.apps.googleusercontent.com"
                          buttonText="Iniciar Sesión Con Google"
                          onSuccess={responseGoogle}
                          isSignedIn={true}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                    </div>

                    <div className="form-group d-md-flex">
                      <div className="w-90 text-md-right">
                        <p>Proyecto Final - Team program1.h</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
