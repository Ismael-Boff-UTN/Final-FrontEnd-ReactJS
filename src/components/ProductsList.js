import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { Header } from "./Header/Header";
import { useSelector } from "react-redux";
import { ProductAvailable } from "../components/Products/ProductAvailable";
import { Footer } from "./Footer/Footer";
export const ProductsList = () => {
  const articulos = useSelector((state) => state.article.articulos);

  return (
    <>
      <NavBar />
      <Header />

      <div className="container productos mt-4">
        <h1 className="text-center mb-5">Nuestros Productos</h1>
        <div className="row">
          {articulos.map((articulo) => (
            <ProductAvailable key={articulo._id} articulo={articulo} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
