import React, { useState } from "react";
import * as S from "./styles";
import MainButton from "../MainButton";

const Form = ({ handleSubmit }) => {
  const [textInput, setTextInput] = useState("");
  return (
    <S.FormWrapper>
      <S.Form>
        <S.Input
          placeholder="00000-000"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <MainButton onClick={(e) => handleSubmit(e, textInput)}>
          Buscar CEP
        </MainButton>
      </S.Form>
    </S.FormWrapper>
  );
};

export default Form;
