import React from "react";
import { Link } from "react-router-dom";

const Frontend = (props) => {
  return (
    <main className="principal">
      <h2>Categoria Frontend</h2>
      {props.livros
        .filter(livro => livro.categoria === "frontend")
        .map(livro => ( 
          <div className="card" key={livro.id}>
            <div className="thumb">
              <img
                src={`/img/capas/${livro.id}.jpg`}
                alt="Thumbnail da capa do livro."
              />
            </div>
            {props.livros
              .filter(c => c.slug === livro.slug)
              .map(livro => (
                <span key={livro.id}>
                  <Link to={`/livro/${livro.slug}`}>
                    {
                      <div className="detalhes">
                        <h3>{livro.titulo}</h3>
                        <p>{livro.descricao.slice(0, 130) + "..."}</p>
                        <p>Leia mais &gt;</p>
                      </div>
                    }
                  </Link>
                </span>
              ))
            }
          </div>
        ))
      }
    </main>
  )
}

export default Frontend;