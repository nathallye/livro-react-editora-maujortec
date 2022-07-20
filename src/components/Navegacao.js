import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = {
  color: "#027399"
}

const Navegacao = (props) => {
  return (
    <ul>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/frontend">Frontend</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/programacao">Programacao</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/design">Design</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/catalago">Catálogo</NavLink>
      </li>
    </ul>
  );
};

export default Navegacao;