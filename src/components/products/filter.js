import React from "react";
import { useFormik } from "formik";
import Checkbox from "./Checkbox";
import {FilterLabel, Form} from "./styled";
const products = require("../../products.json");

const getUniqueTypes = () => {
  return products
    .map((e) => e.type)
    .filter((value, index, self) => self.indexOf(value) === index);
};

const calcActive = (values, e, setFieldValue) => {
  let count = 0;

  Object.entries(values).map((e) => {
    if (e[1]) {
      count++;
    }
  });

  if (count > 1) {
    setFieldValue(e, !values[e]);
  } else if (count === 1 && !values[e]) {
    setFieldValue(e, !values[e]);
  } else {
    return null;
  }
};

const Filter = ({ onSubmitHandler }) => {
  const uniqueTypes = getUniqueTypes();
  const { values, submitForm, setFieldValue } = useFormik({
    initialValues: uniqueTypes.reduce((a, b) => ((a[b] = true), a), {}),
    onSubmit: (values) => {
      onSubmitHandler(values);
    },
  });

  React.useEffect(() => {
    submitForm();
  }, [values, submitForm]);

  return (
    <Form>
      {uniqueTypes.map((e) => (
        <div className="m-3 d-flex align-items-center cursor-pointer" onClick ={() => {
          calcActive(values, e, setFieldValue);
        }} >
          <Checkbox
            name={e}
            id={e}
            handleChange={() => {
              calcActive(values, e, setFieldValue);
            }}
            value={values[e]}
          />
          <FilterLabel>{e}</FilterLabel>
        </div>
      ))}
    </Form>
  );
};

export default Filter;
