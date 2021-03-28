import styled from "styled-components";
import { Form as FormikForm, Field } from "formik";

export const Root = styled.div`
  width: 90%;
  @media screen and (min-width: 992px) {
    width: 82%;
  }
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`;

export const Form = styled(FormikForm)`
  width: 80%;
  align-items: center;
  margin: auto;
`;

export const Input = styled(Field)`
  margin:auto;
  padding: 0;
  width: 40%;
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