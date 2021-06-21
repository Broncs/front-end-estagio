import React, { useState } from "react";
import * as S from "./styles";
import MainButton from "../MainButton";

const Form = ({ getInfoLocation }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState({ error: false, cepError: "" });

  const isValidCEP = () => {
    const regex = /\d{5}-?\d{3}/gi;

    if (!textInput) {
      setError({ error: true, cepError: "Informe um CEP válido" });
      return false;
    }

    if (!regex.test(textInput)) {
      setError({ error: true, cepError: "Número do CEP inválido" });
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
            aria-label="Informe um CEP "
            aria-required="true"
            error={error.error}
            placeholder="00000-000"
            maxLength={textInput.includes("-") ? 9 : 8}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />

          <MainButton
            aria-pressed="true"
            aria-describedby="error-message"
            aria-invalid={error.error}
            onClick={(e) => handleSubmit(e)}
          >
            Buscar CEP
          </MainButton>
        </S.Form>
        {error.error && (
          <S.ErrorMessage id="error-message" role="alert">
            {error.cepError}
          </S.ErrorMessage>
        )}
      </S.FormContainer>
    </S.FormWrapper>
  );
};

export default Form;
