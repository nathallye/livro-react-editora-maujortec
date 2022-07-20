// Antes de virar um componente de classe e ter o objeto state
// import React from "react";

// import Topo from "../components/Topo";
// import PrincipalManipulandoDados from "../components/manipulando_dados/PrincipalManipulandoDados";
// import Rodape from "../components/Rodape";

// function AppAppManipulandoDados() {
//   return (
//     <>
//       <Topo />
//       <PrincipalManipulandoDados />
//       <Rodape />
//     </>
//   );
// }

// export default AppAppManipulandoDados;

import React, { Component } from "react";
import PrincipalManipulandoDados from "../components/manipulando_dados/PrincipalManipulandoDados";

class AppAppManipulandoDados extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isbn: "978-85-75-22-xxx-x",
  //     titulo: "React",
  //     autor: "Maujor"
  //   }
  // };

  //Forma simplificada do construtor:
  state = {
    isbn: "978-85-75-22-xxx-x",
    titulo: "React",
    autor: "Maujor"
  };

  componentDidMount() {
    this.setState({ autor: "Maurício" })
  };

  render() {
    return (
      // <p>
      //   ISBN: {this.state.isbn}<br/>
      //   Título: {this.state.titulo}<br/>
      //   Autor: {this.state.autor}
      // </p>
      <PrincipalManipulandoDados />
    )
  }
}

export default AppManipulandoDados;
