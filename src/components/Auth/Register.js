import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";
import { startRegister } from "../../actions/auth";

export const Register = () => {
  const dispatch = useDispatch();

  const [formValues, setFromValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    
    rol: "USER_ROLE",
  });

  const {
    nombre,
    apellido,
    email,
    password,
    telefono,
    rol,
    localidad,
    calle,
    numero,
    domicilio,
  } = formValues;

  const handleInputChange = ({ target }) => {
    setFromValues({
      ...formValues,
      [target.name]: target.value,

      domicilio: {
        
        calle,[target.name]: target.value,
        localidad,[target.name]: target.value,
        numero,[target.name]: target.value,
        
      },
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(formValues);
    dispatch(startRegister(nombre, apellido, email, password, telefono, rol, domicilio));
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center"></div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Bienvenido A El Buen Sabor</h2>
                  <p>Si Ya Tienes Cuenta</p>
                  <Link to="/login">
                    <a href="#!" className="btn btn-white btn-outline-white">
                      Iniciar Sesión
                    </a>
                  </Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Registrarse</h3>
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
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Ej. Jhon"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Apellido
                    </label>
                    <input
                      name="apellido"
                      type="text"
                      className="form-control"
                      placeholder="Ej. Doe "
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Ej. miemail@gmail.com"
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
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Telefono
                    </label>
                    <input
                      name="telefono"
                      type="number"
                      className="form-control"
                      placeholder="2618754345"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-100">
                    <h3 className="mb-4">Dirección</h3>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Localidad
                    </label>
                    <input
                      name="localidad"
                      type="text"
                      className="form-control"
                      placeholder="Ej. Maipu"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Calle
                    </label>
                    <input
                      name="calle"
                      type="text"
                      className="form-control"
                      placeholder="Ej. Santa Teresa"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="name">
                      Numero
                    </label>
                    <input
                      name="numero"
                      type="number"
                      className="form-control"
                      placeholder="Ej. 235"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Registrarse
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
