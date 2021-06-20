import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.8em 1em;

  background: #444444;
`;

const MainButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default MainButton;
