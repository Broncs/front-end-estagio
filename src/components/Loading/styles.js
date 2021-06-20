import styled from "styled-components";
import { FormWrapper } from "../Form/styles";
import Colors from "../Theme/Colors";

export const LoadingWrapper = styled(FormWrapper)`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    background: white;
    border: 5px solid ${Colors.secondary};
    border-top-color: ${Colors.primary};
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
