import React, { useState } from "react";
import MainButton from "../MainButton";

const Form = ({ handleSubmit }) => {
  const [textInput, setTextInput] = useState("");
  return (
    <form>
      <input
        placeholder="00000-000"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <MainButton onClick={(e) => handleSubmit(e, textInput)}>
        Buscar CEP
      </MainButton>
    </form>
  );
};

export default Form;
