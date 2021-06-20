import styled from "styled-components";
import { FormWrapper } from "../Form/styles";

export const LoadingWrapper = styled(FormWrapper)`
  div {
    display: flex;
    justify-content: center;

    &::after {
      content: "";
      width: 50px;
      height: 50px;
      background: white;
      border: 5px solid #dddddd;
      border-top-color: #444444;
      border-radius: 50%;
      animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
