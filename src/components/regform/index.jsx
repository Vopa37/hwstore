import React, { useState, useContext, useEffect } from "react";
import { Formik, Field } from "formik";
import { Root, Form, Button, Input, Error} from "./styled";
import { UserSchema } from "./regexp";
const axios = require("axios");
import { Redirect} from "@reach/router";

const RegForm = ({toggle}) => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialValues = () => ({
    "bot-field": "",
    "form-name": "Order",
    firstname:"",
    lastname:"",
    username: "",
    password:"",
    admin:false,
  });

  const showSuccessFormSubmit = (resetForm) => {
    setSuccess(true);
    setTimeout(()=>{setSuccess(false);resetForm()},2000);
  }

  return (
    <Root>
      <h1 className="text-white mb-6">Zaregistrujte se:</h1>
      <Formik
          validationSchema={UserSchema}
        initialValues={initialValues(true)}
        onSubmit={(values, { resetForm, setValues }) => {
          axios.get("http://localhost:5000/user/specific", {params:{username:values.username}} ).then((res)=>{
            if(res.data){
              console.log("User already exists");
            }else{
              axios.post("http://localhost:5000/user",{
                firstname:values.firstname,
                lastname:values.lastname,
                username:values.username,
                password:values.password,
                admin:false,
              }).then(()=>{
                resetForm();
                toggle(false);
              })
            }
          });
        }}
        render={({ handleSubmit, errors, touched, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            name="Order"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />

            <div>
              <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Jméno:"
                  error={errors.firstname && touched.firstname}
              />
              <Error visibility={errors.firstname && touched.firstname}>
                {errors.firstname ? errors.firstname : "No errors"}
              </Error>
            </div>
            <div>
              <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Příjmení:"
                  error={errors.lastname && touched.lastname}
              />
              <Error visibility={errors.lastname && touched.lastname}>
                {errors.lastname ? errors.lastname : "No errors"}
              </Error>
            </div>
            <div>
              <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Uživatelské jméno:"
                  error={errors.username && touched.username}
              />
              <Error visibility={errors.username && touched.username}>
                {errors.username ? errors.username : "No errors"}
              </Error>
            </div>
            <div>
              <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Heslo:"
                  error={errors.password && touched.password}
              />
              <Error visibility={errors.password && touched.password}>
                {errors.password ? errors.password : "No errors"}
              </Error>
            </div>

            <Button
              type="submit"
            >
              {submitted ? "✓" : isSubmitting ? "Odesílání" : "Odeslat"}
            </Button>
          </Form>
        )}
      />
    </Root>
  );
};

export default RegForm;
