import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { LogIn } from "../components/Auth/LogIn";
import  LogIn2  from "../components/Auth/LogInMaterial";
import { Register } from "../components/Auth/Register";
import Register2 from '../components/Auth/RegisterMaterial';
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/auth";
import { ProductsList } from "../components/ProductsList";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SemipolarLoading } from 'react-loadingg';
import {Profile} from '../components/UserProfile/Profile';
import { obtenerArticulos } from "../actions/articles";


export const AppRouter = () => {
  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
    dispatch(obtenerArticulos());
  }, [dispatch]);

  console.log(checking);

  
if(checking){
  return (<SemipolarLoading />);
}
  

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LogIn2} isAuthenticated={!!uid}/>
          <PublicRoute exact path="/new-user" component={Register2} />
          <PrivateRoute exact path="/product-list" component={ProductsList} isAuthenticated={!!uid} />
          <PrivateRoute exact path="/userProfile" component={Profile} isAuthenticated={!!uid} />

          
        </Switch>
        <Redirect path="/"/>
      </div>
    </Router>
  );
};
