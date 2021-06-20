import { useState, useEffect } from "react";
import Form from "./components/Form/index";

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
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!data.ok) {
        throw Error("Houve um erro ao obter os dados de localização !");
      }

      const result = await data.json();
      setState({ status: "resolved", dataInfo: result });
    } catch (err) {
      console.log(err);
      setState({ error: "Tente novamente!", status: "rejected" });
    }
  };

  const handleSubmit = (e, textInput) => {
    e.preventDefault();

    getJSON(textInput);
  };

  return (
    <main className="App">
      <section>
        <Form handleSubmit={handleSubmit} />
      </section>
      {state.status === "resolved" && <InfoLocation payload={state.dataInfo} />}
      {state.status === "rejected" && <h1>{state.error}</h1>}
    </main>
  );

  // if (state.status === "rejected") {
  //   return <div>houve um erro . </div>;
  // }

  // if (state.status === "idle") {
  //   return (

  //   );
  // }
  // if (state.status === "pending") {
  //   return (
  //     <div>
  //       <h1>LOADING DATA</h1>
  //     </div>
  //   );
  // }

  // if (state.status === "resolved") {
  //   return (
  //     <main className="App">
  //       <section>
  //         <form>
  //           <input
  //             placeholder="00000-000"
  //             value={textInput}
  //             onChange={(e) => setTextInput(e.target.value)}
  //           />
  //           <button onClick={(e) => handleSubmit(e)}>Buscar CEP</button>
  //         </form>
  //       </section>
  //       <section>
  //         <InfoLocation payload={state.dataInfo} />
  //       </section>
  //     </main>
  //   );
  // }
}

export default App;
