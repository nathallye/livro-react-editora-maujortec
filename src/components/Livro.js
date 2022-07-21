import React from "react";

const Livro = (props) => { // ou podemos tirar o livro diretamente de dentro de props assim: ({ livro }); a consulta ficaria assim: livro.titulo ou invés de props.livro.titulo
  return (
    <main className="principal">
      <div className="pag-livro">
        <h2>{props.livro.titulo}</h2> 
        <div className="livro">
          <img
            src={"public/img/capas/" + props.livro.id + ".jpg"}
            alt="Thumbnail da capa do livro..."
          />
          <ul>
            <li>ISBN: {props.livro.isbn}</li>
            <li>Ano: {props.livro.ano}</li>
            <li>Páginas: {props.livro.paginas}</li>
            <li>Preço: R${props.livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{props.livro.descricao}</p>
        </div>
      </div>
    </main>
  )
}

export default Livro;