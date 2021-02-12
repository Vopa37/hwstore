import styled from "styled-components";
import Theme from "../theme";

export const Button = styled.button`
  cursor:pointer;
  max-width: 10rem;
  min-width: 6rem;
  width: 50%;
  display: block;
  margin: 2rem auto;
  height:2rem;
  background-color:${Theme.palette.secondary};
  color:${Theme.palette.text};
  border:0;
  border-radius: 2rem;
`;