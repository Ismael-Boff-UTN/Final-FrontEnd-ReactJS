import React from "react";
import './styles.css';

export const Header = () => {
  return (
    <div className="image">
      <h1 className="heading">Bienvenido!</h1>
      <p>
        <button id="headerbtn" className="btn btn-large">Big Button</button>
      </p>
    </div>
  );
};
