import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { LogIn } from "../components/Auth/LogIn";
import { Register } from "../components/Auth/Register";
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
          <PublicRoute exact path="/login" component={LogIn} isAuthenticated={!!uid}/>
          <PublicRoute exact path="/login/new-user" component={Register} />
          <PrivateRoute exact path="/" component={ProductsList} isAuthenticated={!!uid} />
          <PrivateRoute exact path="/userProfile" component={Profile} isAuthenticated={!!uid} />

          <Redirect path="/" />
        </Switch>
      </div>
    </Router>
  );
};
