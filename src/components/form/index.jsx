import React, { useState, useContext, useEffect } from "react";
import { Formik, Field } from "formik";
import { Root, Form, Button, Input, Error, InputArea } from "./styled";
import { SignupSchema, encode } from "./regexp";
import { TextContext } from "../textContext";

const Formular = () => {
  const [text] = useContext(TextContext);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = (withText) => ({
    "bot-field": "",
    "form-name": "Order",
    name: "",
    email: "",
    telephone: "",
    company: "",
    surname: "",
    from: "",
    to: "",
    reason: withText && text ? "Dobrý den, mám zájem o " + text + ". " : "",
  });

  return (
    <Root>
      <Formik
        initialValues={initialValues(true)}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setValues }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "Order",
              ...values,
            }),
          })
            .then(() => {
              resetForm();
              setValues(initialValues(false));
              setSubmitted(true);
            })
            .catch((error) => alert(error));
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

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="name"
                name="name"
                placeholder="Jméno *"
                error={errors.name && touched.name}
              />
              <Error visibility={errors.name && touched.name}>
                {errors.name ? errors.name : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="surname"
                name="surname"
                placeholder="Příjmení *"
                error={errors.surname && touched.surname}
              />
              <Error visibility={errors.surname && touched.surname}>
                {errors.surname ? errors.surname : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="company"
                name="company"
                placeholder="Firma"
                error={errors.company && touched.company}
              />
              <Error visibility={errors.company && touched.company}>
                {errors.company ? errors.company : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="email"
                name="email"
                placeholder="Email *"
                error={errors.email && touched.email}
                type="email"
              />
              <Error visibility={errors.email && touched.email}>
                {errors.email ? errors.email : "No errors"}
              </Error>

              <Input
                id="telephone"
                name="telephone"
                placeholder="Telefonní číslo *"
                error={errors.telephone && touched.telephone}
              />
              <Error visibility={errors.telephone && touched.telephone}>
                {errors.telephone ? errors.telephone : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="from"
                name="from"
                placeholder="Od *"
                error={errors.from && touched.from}
              />
              <Error visibility={errors.from && touched.from}>
                {errors.from ? errors.from : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-4 float-left">
              <Input
                id="to"
                name="to"
                placeholder="Do"
                error={errors.to && touched.to}
              />
              <Error visibility={errors.to && touched.to}>
                {errors.to ? errors.to : "No errors"}
              </Error>
            </div>

            <div className="col-12 col-lg-8 float-left">
              <Field id="reason" name="reason">
                {(props) => (
                  <>
                    <InputArea
                      id="reason"
                      name="reason"
                      placeholder="Za jakým účelem si chcete zařízení půjčit?"
                      as="textarea"
                      error={errors.reason && touched.reason}
                      {...props.field}
                    />

                    <Error visibility={errors.reason && touched.reason}>
                      {errors.reason ? errors.reason : "No errors"}
                    </Error>
                  </>
                )}
              </Field>
            </div>

            <Button
              type="submit"
              submitted={submitted}
              disabled={isSubmitting || submitted}
            >
              {submitted ? "✓" : isSubmitting ? "Odesílání" : "Odeslat"}
            </Button>
          </Form>
        )}
      />
    </Root>
  );
};

export default Formular;
