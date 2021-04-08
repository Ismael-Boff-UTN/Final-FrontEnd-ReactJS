import React from "react";
import { Navbar } from "../components/NavBar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <Switch>
          <Route exact path="/product-list" component={ProductsList} />

          {/*Si El Usuario Intenta Ingresar A Cualquier Otra URL Que No Existe, Se Lo Redirecciona */}
          <Redirect to="/product-list" />
        </Switch>
      </div>
    </>
  );
};
