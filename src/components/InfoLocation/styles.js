import styled from "styled-components";
import { FormWrapper } from "../Form/styles";

export const InfoWrapper = styled(FormWrapper)`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const TextHighlight = styled.span`
  font-weight: bold;
`;

export const Text = styled.p`
  margin: 0.3rem 0;
  color: #6a6a6a;
`;
