import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topo from "../components/Topo";
import Home from "../components/Home";
import Frontend from "../components/routes/Frontend";
import Programacao from "../components/routes/Programacao";
import Design from "../components/routes/Design";
import Catalogo from "../components/routes/Catalogo";
import NotFound from "../components/routes/NotFound";
import Rodape from "../components/Rodape";

const App = () => {
  return (
    <Router>
      <>
        <Topo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/frontend" element={<Frontend />} />
          <Route exact path="/programacao" element={<Programacao />} />
          <Route exact path="/design" element={<Design />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </>
    </Router>
  );
}

export default App;