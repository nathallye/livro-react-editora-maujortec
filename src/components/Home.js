import React from "react";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h3 className="titPagina">{props.tituloPagina}</h3>
      {/* Para acessar as constantes diretas de dentro de props */}
      {/* 
      <p>
        ISBN: {props.isbn}<br/>
        Título: {props.titulo}<br/>
        Autor: {props.autor} 
      </p> 
      */}
      {/* Para acessar um array de objetos de dentro de props(usando o método map para percorrer o array em cada um dos seus indices(i) e em seguida usar o ponto(.) para acessar a propriedade em questão) */}
      {props.dados.map((item, i) => (
        <p key={i}>
          ISBN: {props.dados[i].isbn}<br/>
          Título: {props.dados[i].titulo}<br/>
          Autor: {props.dados[i].autor}
        </p>
      ))}
      {props.children}
    </>
  );
};

export default Home;