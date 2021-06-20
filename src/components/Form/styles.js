import styled from "styled-components";

export const FormWrapper = styled.div`
  background: white;
  max-width: 500px;
  width: 80%;
  border: 1px solid #dddddd;
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  padding: 1em;

  margin-right: 5px;
  border: 1px solid ${({ error }) => (error ? "#DC3545" : "#dddddd")};
  color: #333;

  &::placeholder {
    color: #757474;
  }
  &:focus {
    outline: none;
    border: 2px solid ${({ error }) => (error ? "#DC3545" : "#6aa4f8")};
    box-shadow: 0px 0px 2px ${({ error }) => (error ? "#DC3545" : "#6aa4f8")};
    border-radius: 3px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: #dc3545;
  margin: 0.5rem 0 0 0;
`;
