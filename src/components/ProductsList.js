import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { useSelector } from "react-redux";
import { ProductAvailable } from "../components/Products/ProductAvailable";
export const ProductsList = () => {
  const articulos = useSelector((state) => state.article.articulos);

  return (
    <>
      <NavBar />

      <div class="row row-cols-1 row-cols-md-3">
        {articulos.map((articulo) => (
          <ProductAvailable key={articulo._id} articulo={articulo} />
        ))}
      </div>
    </>
  );
};
