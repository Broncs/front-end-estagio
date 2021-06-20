import React from "react";

const InfoLocation = ({ payload }) => {
  console.log(payload);
  return (
    <div>
      <p>CEP: {payload.cep}</p>
      <p>Estado: {payload.uf}</p>
      <p>Cidade: {payload.localidade}</p>
      <p>Logradouro: {payload.logradouro}</p>
    </div>
  );
};

export default InfoLocation;
