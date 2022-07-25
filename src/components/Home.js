import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <main className="principal">
      <h2>Últimos lançamentos</h2>
      {/* <p>Conteúdos da Home Page</p> */}
      {props.livros
        .filter((n, index) => index < 8)
        .map(livro => (
          <div className="card" key={livro.id}>
            <div className="thumb">
              <img 
              src={`/img/capas/${livro.isbn.replace(/-/g, "")}.jpg`}
              alt="Thumbnail da capa do livro" />
            </div>
            {props.livros
              .filter(c => c.slug === livro.slug)
              .map(livro => ( 
                <Link to={`/livros/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia mais &gt;</p>
                  </div>
                } 
                </Link>
              ))
            }
          </div>
        ))
      }
      {/* {props.children} */}
    </main>
  );
};

export default Home;