import React from "react";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h3 className="titPagina">{props.tituloPagina}</h3>
      <button type="button" className="btn"
        onClick={props.onAlterarTitulo}>
        Alterar título página
      </button>
      {/* Para acessar as constantes diretas de dentro de props */}
      {/* 
      <p>
        ISBN: {props.isbn}<br/>
        Título: {props.titulo}<br/>
        Autor: {props.autor} 
      </p> 
      */}

      <p>
        ISBN: {props.dados.isbn}<br/>
        Título: {props.dados.titulo}<br/>
        Autor: {props.dados.autor} 
      </p> 

      {/* Para acessar um array de objetos de dentro de props(usando o método map para percorrer o array em cada um dos seus indices(i) e em seguida usar o ponto(.) para acessar a propriedade em questão) */}
      {/* 
      {props.dados.map((item, i) => (
        <p key={i}>
          ISBN: {props.dados[i].isbn}<br/>
          Título: {props.dados[i].titulo}<br/>
          Autor: {props.dados[i].autor}
        </p>
      ))} 
      */}
      {props.children}

      {/* Antes de usar o recebimento de dados via props */}
      {/* 
      <h2>Últimos lançamentos</h2>
      <div className="card">
        <div className="thumb">
          <img src="img/capas/9788575228142.jpg" alt="" />
        </div>
        <div className="detalhes">
          <h3>Padrões para Kubernetes</h3>
          <p>O modo como os...</p>
          <a href="#">Leia mais &gt;</a>
        </div>
      </div>
      <div className="card">
        <div className="thumb">
          <img src="img/capas/9788575228074.jpg" alt="" />
        </div>
        <div className="detalhes">
          <h3>Introdução ao Pentest - 2° Edição</h3>
          <p>Introdução ao Pentest...</p>
          <a href="#">Leia mais &gt;</a>
        </div>
      </div> 
      */}
    </>
  );
};

export default Home;