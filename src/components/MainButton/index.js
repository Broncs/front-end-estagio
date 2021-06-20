import React from "react";
import * as S from "./styles";

const MainButton = (props) => {
  return <S.Button {...props}>{props.children}</S.Button>;
};

export default MainButton;
