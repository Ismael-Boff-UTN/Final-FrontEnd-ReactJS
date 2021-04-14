import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { NavBar } from "../NavBar/NavBar";

export const Profile = () => {
  //const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.resto);

  //useEffect(() => {
  //dispatch(startChecking());
  //}, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        {" "}
                        <img
                          src={user.img}
                          className="img-radius"
                          alt="User-Profile"
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            minWidth: "100px",
                            minHeight: "100px",
                          }}
                        />{" "}
                      </div>
                      <h6 className="f-w-600">
                        {user.nombre + " " + user.apellido}
                      </h6>
                      <p>{user.rol}</p>{" "}
                      <button className="btn btn-primary mt-4">
                        Editar Perfil
                      </button>
                      <div className="m-b-25 mt-5">
                        {" "}
                        <img
                          src="assets/images/buenSaborLogo.jpg"
                          className="img-radius"
                          alt="brandLogo"
                          style={{ maxWidth: "150px", maxHeight: "150px" }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Información Basica
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Telefono</p>
                          <h6 className="text-muted f-w-400">
                            {user.telefono}
                          </h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Domicilio Fiscal
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Localidad</p>
                          <h6 className="text-muted f-w-400">
                            {user.domicilio.localidad}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Calle</p>
                          <h6 className="text-muted f-w-400">
                            {user.domicilio.calle}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 mt-3">Numero</p>
                          <h6 className="text-muted f-w-400">
                            {user.domicilio.numero}
                          </h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Historial De Pedidos
                      </h6>
                      <div className="row">
                        <table class="table table-dark">
                          <thead>
                            <tr>
                              <th scope="col">Numero</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Estado</th>
                              <th scope="col">Tipo Envio</th>
                              <th scope="col">Accion</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.pedidos.map((pedido) => (
                              <tr>
                                <td>{pedido.id}</td>
                                <td>{pedido.fecha}</td>
                                <td>{pedido.estado}</td>
                                <td>{pedido.tipoEnvio}</td>

                                <button className="btn btn-success">
                                  Ver Factura
                                </button>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
