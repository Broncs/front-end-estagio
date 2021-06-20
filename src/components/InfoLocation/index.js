import React from "react";
import * as S from "./styles";

const InfoLocation = ({ payload }) => {
  console.log(payload);
  return (
    <S.InfoWrapper>
      <S.Text>
        <S.TextHighlight>CEP: </S.TextHighlight>
        {payload.cep}
      </S.Text>
      <S.Text>
        <S.TextHighlight>Estado: </S.TextHighlight>
        {payload.uf}
      </S.Text>
      <S.Text>
        <S.TextHighlight>Cidade: </S.TextHighlight>
        {payload.localidade}
      </S.Text>
      <S.Text>
        <S.TextHighlight>Logradouro: </S.TextHighlight>
        {payload.logradouro}
      </S.Text>
    </S.InfoWrapper>
  );
};

export default InfoLocation;
