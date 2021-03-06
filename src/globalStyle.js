import { createGlobalStyle } from "styled-components";
import Colors from "./components/Theme/Colors";

const GlobalStyle = createGlobalStyle`
 *{
     margin: 0;
     padding: 0; 
 }
 body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  "Ubuntu", Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
  color: ${Colors.primary};
 
  @media (max-width: 600px){
    font-size: 82%;
   } 
  }
 }
`;

export default GlobalStyle;
