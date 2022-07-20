import React from "react";

const Home = (props) => {
  return (
    <main className="principal">
      <h2>Últimos lançamentos</h2>
      <div className="card">
        <p>Conteúdos da Home Page</p>
      </div>
      {props.children}
    </main>
  );
};

export default Home;