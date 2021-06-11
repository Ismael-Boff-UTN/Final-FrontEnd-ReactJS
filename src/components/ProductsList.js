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
      <div style={{background:"black"}}>
        <NavBar />
        <Header />

        <div className="container mt-4">
          <h1 className="text-center mb-5">Nuestros Productos</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {articulos.map((articulo) => (
              <ProductAvailable key={articulo._id} articulo={articulo} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
