import React from "react";
import {useDispatch} from 'react-redux';
import { obtenerArticulo } from "../../actions/cart";
import "./styles.css";


export const ProductAvailable = ({ articulo }) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = (id) => {
    dispatch(obtenerArticulo(id));
  };
  return (
    <div class="col mb-4">
      <div class="card">
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
                  <button class="btn btn-success" onClick={()=> handleAddItemToCart(articulo._id)}>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
