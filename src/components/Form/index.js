import React, { useState } from "react";
import * as S from "./styles";
import MainButton from "../MainButton";

const Form = ({ getInfoLocation }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState({ error: false, cepError: "" });

  const isValidCEP = () => {
    const regex = /\d{5}-?\d{3}/gi;

    if (!textInput) {
      setError({ error: true, cepError: "O CEP não pode estar vazio" });
      return false;
    }

    if (!regex.test(textInput)) {
      setError({ error: true, cepError: "Digite um cep válido" });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = isValidCEP();
    if (!isValid) return;

    getInfoLocation(textInput.trim());
    setError({ error: false, cepError: "" });
    setTextInput("");
  };

  return (
    <S.FormWrapper>
      <S.FormContainer>
        <S.Form>
          <S.Input
            name="CEP"
            maxLength={8}
            error={error.error}
            placeholder="00000-000"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />

          <MainButton onClick={(e) => handleSubmit(e)}>Buscar CEP</MainButton>
        </S.Form>
        {error.error && <S.ErrorMessage>{error.cepError}</S.ErrorMessage>}
      </S.FormContainer>
    </S.FormWrapper>
  );
};

export default Form;
