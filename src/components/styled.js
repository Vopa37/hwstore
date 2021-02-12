import styled from "styled-components";
import Theme from "./theme";

export const Root = styled.div`
  display:flex;
  flex-direction:column;
  text-align: center;
  background-image: linear-gradient(
    180deg,
    #1a1449 21.53%,
    #eb5d3e 76.89%,
    #fec82f 99.05%
  );
  color: ${Theme.palette.secondary};
  font-family: ${Theme.fonts.primary};
  font-size: ${Theme.fontBaseSize};
  min-height: 100vh;
  padding-top: 80px;
  overflow-x: hidden;
`;

export const PageRoot = styled.div`
  display:flex;
  flex-direction:column;
  text-align: center;
  background-color: ${Theme.palette.primary}; 
  color: ${Theme.palette.secondary};
  font-family: ${Theme.fonts.primary};
  font-size: ${Theme.fontBaseSize};
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  max-width: 1440px;
`;

export const MenuTarget = styled.a`
  display: block;
  position: relative;
  top: -250px;
  visibility: hidden;
`;