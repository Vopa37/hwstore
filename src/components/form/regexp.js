import * as Yup from "yup";

const phoneRegExp = /([+]?\d{1,3}[. \s]?)?(\d{9}?)$/;
const dateRegExp = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Přílíš krátké!")
    .max(50, "Příliš dlouhé!")
    .required("Povinné"),
  surname: Yup.string()
    .min(2, "Přílíš krátké!")
    .max(50, "Příliš dlouhé!")
    .required("Povinné"),
  email: Yup.string()
    .email("Neplatný email")
    .max(50, "Příliš dlouhé!")
    .required("Povinné"),
  telephone: Yup.string()
    .matches(phoneRegExp, "Špatný formát")
    .max(13, "Příliš dlouhé!")
    .required("Povinné"),
  company: Yup.string().max(50, "Příliš dlouhé!"),
  from: Yup.string()
    .matches(dateRegExp, "Není validní datum!")
    .required("Povinné"),
  to: Yup.string().matches(dateRegExp, "Není validní datum!"),
  reason: Yup.string().max(200, "Příliš dlouhé!"),
});

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
