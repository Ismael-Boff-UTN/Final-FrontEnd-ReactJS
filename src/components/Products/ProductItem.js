import React from "react";

export const ProductItem = ({ articulo }) => {
  return (
    <>
      <p className="dropdown-header text-center">
        
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" checked />  {articulo.denominacion + " - $" + articulo.precioVenta}
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" /> X
          </label>
        </div>
      </p>
    </>
  );
};
