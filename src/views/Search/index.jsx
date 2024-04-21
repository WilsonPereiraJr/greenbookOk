import Logo from "../../componentes/Logo/index";
import SearchBar from "../../componentes/Searchbar/index";
import Disclaimerdialog from "../../componentes/Disclaimerdialog/index";
import Rightsreserved from "../../componentes/Rightsreserved/index";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_SEARCH } from "../../services/queries";

export default () => {
  const [query, setQuery] = useState("Ech");
  const { loading, error, data } = useQuery(GET_SEARCH, {
    variables: { q: query },
  });

  useEffect(() => {
    if (data) {
      console.log(data.search);
    }
  }, [data]);

  const handleChange = (e) => {
    // TODO Remind to use debounce
    setQuery(e.target.value);
  };

  return (
    <>
      <Logo />
      <SearchBar value={query} onChange={handleChange} />
      <Rightsreserved />
      <Disclaimerdialog />
      <p>Resultados:</p>
      {data &&
        data.search?.map((item) => <pre>{JSON.stringify(item, null, 2)}</pre>)}
    </>
  );
};
