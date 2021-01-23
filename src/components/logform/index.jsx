import React, { useState, useContext, useEffect } from "react";
import { Formik, Field } from "formik";
import { Root, Form, Button, Input, Error, Status} from "./styled";
import { UserSchema } from "./regexp";
const axios = require("axios");
import { Redirect} from "@reach/router";

const LogForm = ({toggle}) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(undefined);

  const initialValues = () => ({
    "bot-field": "",
    "form-name": "Order",
    username:"",
    password:"",
  });

  return (
    <Root>
      <h1 className="text-white mb-6">Přihlásit se:</h1>
      <Formik
          validationSchema={UserSchema}
          initialValues={initialValues(true)}
          onSubmit={(values, { resetForm }) => {
            setSubmitted(true);
          axios.get("http://localhost:5000/user/specific", {params:{username:values.username,password:values.password}} ).then((res)=>{
            if(res.data){
              resetForm();
              localStorage.setItem("user",res.data.username);
              setMessage({text:"Přihlášení proběhlo úspěšně",error:false});
              setTimeout(()=>{toggle(false);resetForm()},2000);
            }else{
              setMessage({text:"Uživatelské jméno nebo heslo není správné",error:true});
              setTimeout(()=>{toggle(false);resetForm()},2000);
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

            {message &&
            <Status error={message.error}>{message.text}</Status>
            }

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

export default LogForm;
