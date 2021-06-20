import React from "react";
import * as S from "./styles";

const ShowError = ({ errorMessage }) => {
  return (
    <S.ErrorWrapper>
      <p> {errorMessage}</p>
    </S.ErrorWrapper>
  );
};

export default ShowError;
