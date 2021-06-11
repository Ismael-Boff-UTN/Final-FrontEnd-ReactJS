import React from "react";
import { useDispatch } from "react-redux";
import { obtenerArticulo } from "../../actions/cart";
//import "./styles.css";

export const ProductAvailable = ({ articulo }) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = (id) => {
    dispatch(obtenerArticulo(id));
  };
  return (
    <>
      <div className="col">
        <div class="card h-100">
          <img
            src={articulo.imagen}
            className="card-img-top"
            alt="product"
            style={{ maxHeight: "400px", maxWidth: "400px" }}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};
