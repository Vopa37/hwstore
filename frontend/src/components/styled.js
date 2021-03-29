import styled from "styled-components";
import Theme from "./theme";
import { Form as FormikForm, Field } from "formik";

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
  color:white;
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

export const Button = styled.button`
  cursor:pointer;
  max-width: 10rem;
  min-width: 6rem;
  margin: 0 2rem 2rem 2rem;
  width: 50%;
  height:2rem;
  background-color:${Theme.palette.secondary};
  color:${Theme.palette.text};
  border:0;
  border-radius: 2rem;
  transition-duration: 0.6s;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.6s;
    cursor: pointer;
  }
  @media(max-width: 992px){
    width: 80%;
  }
`;

export const Status = styled.div`
    color: white;
    width: 100%;
    @media(max-width: 992px){
      width: 50%;
    }
    margin: 1rem auto;
    font-size:2rem;
    text-align:center;
    font-weight:900;
`;

export const Form = styled(FormikForm)`
  width: 40%;
  align-items: center;
  margin: auto;
  @media(max-width: 992px){
    width: 80%;
  }
`;

export const Input = styled(Field)`
  margin:auto;
  padding: 0;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 20px;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
  :focus {
    border: 1px solid grey;
  }
  outline: none;
`;

export const InputArea = styled(Field)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 125px;
  border-radius: 10px;
  padding-left: 20px;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
  margin-top: 5px;
`;

export const Error = styled.p`
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  color: white;
  margin-bottom: 10px;
  padding-left: 3px;
`;

export const Checkbox = styled(Field)`
  margin-bottom:2rem;
  padding:0;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
  :focus {
    border: 1px solid grey;
  }
  outline: none;
`;

export const AlertWrapper = styled.div`
  margin:auto;
`;
