import React, { Component, Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "../index.css";

import Topo from "../components/Topo";
import Home from "../components/Home";
import Frontend from "../components/routes/Frontend";
import Programacao from "../components/routes/Programacao";
import Design from "../components/routes/Design";
import Catalogo from "../components/routes/Catalogo";
import NotFound from "../components/routes/NotFound";
import Rodape from "../components/Rodape";
import Livro from "../components/Livro";

class App extends Component {
  
  state = { // definimos o estado inicial do objeto state, um objeto vazio de dados denominado livros
    livros: []
  };

  async componentDidMount() { // Uso de um método do ciclo de vida dos componentes servindo de container para disparo da requisição axios dos dados da página. Declaração explícita async para uso com await na promise;
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json"); // sintase para requisição axops. Uso de await e o retorno padrão data foi renomeado para livros;
      this.setState({ livros: livros }) // ou somente {{ livros }} : objeto contendo dados vindas da requisição são armazenados no objeto livros e atualizado com o método setState;
    } catch(error) { // cláusulas de tratamento de erro, a diretiva catch captura um eventual erro na requisição;
      console.log(error); // se o erro ocorrer, o mostra no console
      document // o tratamento do erro deve ser feito de modo a apresentar uma mensagem amigável ao usuário.
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='error'>Mensagem de erro</p>"
        );
    }
  }
  
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home livros={this.state.livros} />} />
            <Route exact path="/frontend" element={<Frontend livros={this.state.livros} />} />
            <Route exact path="/programacao" element={<Programacao livros={this.state.livros} />} />
            <Route exact path="/design" element={<Design livros={this.state.livros} />} />
            <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
            <Route path="/livro/:livroSlug" 
              element={(props) => {const livro = this.state.livros.find(livro => livro.slug === props.match.params.livroSlug); 
                if (livro) return <Livro livro={livro} />;
                else return <NotFound />
               }} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;