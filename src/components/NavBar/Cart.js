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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <span className="badge badge-warning">{cart.length}</span>
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
          <p className="text-center">
            <button className="btn">
              <img
                src="assets/images/noItems.png"
                width="45"
                height="45"
                className="rounded-circle"
                alt="noItems"
              />
              <span>Sin Articulos</span>
            </button>
          </p>
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
