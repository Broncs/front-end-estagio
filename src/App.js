import { useState } from "react";
import Form from "./components/Form/index";
import Loading from "./components/Loading";
import styled from "styled-components";
import ShowError from "./components/ShowError";

import InfoLocation from "./components/InfoLocation";

function App() {
  const [state, setState] = useState({
    status: "idle",
    dataInfo: null,
    error: null,
  });

  const getJSON = async (cep) => {
    setState({ status: "pending" });
    try {
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json`);

      if (!data.ok) {
        throw Error("Houve um erro ao obter os dados de localização !");
      }

      const result = await data.json();

      if (result.erro) {
        throw Error("O cep consultado não foi encontrado na base de dados.");
      }

      setState({ status: "resolved", dataInfo: result });
    } catch (err) {
      setState({ error: err.message, status: "rejected" });
    }
  };

  return (
    <Main>
      <Form getInfoLocation={getJSON} />

      {state.status === "resolved" && <InfoLocation payload={state.dataInfo} />}
      {state.status === "pending" && <Loading />}
      {state.status === "rejected" && <ShowError errorMessage={state.error} />}
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

export default App;
