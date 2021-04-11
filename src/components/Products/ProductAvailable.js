import React from "react";
import "./styles.css";

export const ProductAvailable = ({ articulo }) => {
  return (
    <div class="col mb-3">
      <div class="card h-100">
        <div class="profile-card-4 text-center">
          <img
            src={articulo.imagen}
            class="img img-responsive"
            style={{ maxWidth: "300px", maxHeight: "400px" }}
            alt="article"
          />
          <div class="profile-content">
            <div class="profile-name">{articulo.denominacion}</div>
            <div class="profile-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </div>
            <div class="row">
              <div class="col-6">
                <div class="profile-overview">
                  <p>Precio</p>
                  <h4>AR$ {articulo.precioVenta}</h4>
                </div>
              </div>
              <div class="col-6">
                <div class="profile-overview">
                  <button class="btn btn-success">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
