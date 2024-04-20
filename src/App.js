import React, { useEffect, useState } from "react";
import Logo from "./componentes/Logo/index";
import SearchBar from "./componentes/Searchbar/index";
import Disclaimerdialog from "./componentes/Disclaimerdialog/index";
import Rightsreserved from "./componentes/Rightsreserved/index";

export default function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (text) {
      fetch("https://greenbook.filipelopes.med.br/graphql")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    }
  }, [text]);
  return (
    <div className="container">
      <Logo />
      <SearchBar value={text} onChange={(search) => setText(search)} />
      <Rightsreserved />
      <Disclaimerdialog />
    </div>
  );
}
