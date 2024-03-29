import React from "react";

import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/">
      <h1 className="logo">
        <img 
          src="img/logo.png"
          alt="Logo do site Editora MaujorTec"
        />
      </h1>
      <br />
      <br />
    </Link>
  );
};

export default Logo;