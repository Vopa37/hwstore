import styled from "styled-components";
import Theme from "../theme";
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
  display: inline-block;
  align-items: center;
  margin: auto;
`;

export const Input = styled(Field)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 20px;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
  margin-top: 5px;
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
  float: left;
  color: white;
  margin-bottom: 10px;

  padding-left: 3px;
`;

export const Button = styled.button`
  width: 90%;
  @media screen and (min-width: 992px) {
    width: 33.33%;
    margin-left: 30px;
    margin-top: 30px;
  }
  margin: auto;
  height: 40px;
  background-color: ${(props) => (props.submitted ? "#32CD32" : "#1A1449")};
  color: ${(props) =>
    props.submitted ? Theme.palette.primary : Theme.palette.secondaryLight};
  border: none;
  border-radius: 10px;
  font-weight: bold;
  :hover {
    opacity: ${(props) => (props.submitted ? "" : 0.7)};
    cursor: ${(props) => (props.submitted ? "" : "pointer")};
  }
`;
