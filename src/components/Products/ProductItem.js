import React from "react";
import {useDispatch} from 'react-redux';
import { quitarArticuloCart } from "../../actions/cart";

export const ProductItem = ({ articulo }) => {
  const dispatch = useDispatch();
const onQuitArticulo = (id) =>{
       dispatch(quitarArticuloCart(id));
}

  return (
    <>
      <p className="dropdown-header text-center">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button className="btn btn-secondary">
            {articulo.denominacion + " - $" + articulo.precioVenta}
          </button>

          <button className="btn btn-danger" onClick={()=> onQuitArticulo(articulo._id)} >X</button>
        </div>
      </p>
    </>
  );
};
