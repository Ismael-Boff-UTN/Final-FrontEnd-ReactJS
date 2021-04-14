import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../Products/ProductItem";
export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  //console.log(cart);

  var total = 0;

  cart.forEach((item) => {
    total += item.articulo.precioVenta;
  });

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
          src="https://play-lh.googleusercontent.com/E8abWF0D4nt9Il12VRFBqWkqawYF2g7vPmyspPOYqXzh9PH8VWDdT0hIF9viC5le-Lc"
          width="40"
          height="40"
          className="rounded-circle"
          alt="bagPicture"
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right scroll-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <p className="dropdown-header text-center">
          <button type="button" class="btn btn-primary">
            Items Agregados <span class="badge badge-light">{cart.length}</span>
          </button>
        </p>
        <div className="dropdown-divider"></div>
        {cart.length === 0 ? (
          <p className="text-center">Carrito Vacio :c</p>
        ) : (
          cart.map((item) => (
            <ProductItem key={item.articulo._id} articulo={item.articulo} />
          ))
        )}
        <div className="dropdown-divider"></div>
        <p className="dropdown-header text-center">
          <button className="btn btn-success">CheckOut</button>
          <button className="btn btn-info">Total : {total}</button>
        </p>
      </div>

      <div className="menu"></div>
    </li>
  );
};
