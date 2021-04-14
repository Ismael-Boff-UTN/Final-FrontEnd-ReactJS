import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { Header } from "./Header/Header";
import { useSelector } from "react-redux";
import { ProductAvailable } from "../components/Products/ProductAvailable";
export const ProductsList = () => {
  const articulos = useSelector((state) => state.article.articulos);

  return (
    <>
      <NavBar />
      <Header/>

      <div class="row row-cols-1 row-cols-md-3 mt-5">
        {articulos.map((articulo) => (
          <ProductAvailable key={articulo._id} articulo={articulo} />
        ))}
      </div>
    </>
  );
};
