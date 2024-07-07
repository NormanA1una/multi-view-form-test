import { boolean, object, string } from "yup";

export const dataSchema = object().shape({
  name: string()
    .required("Name is required!")
    .min(2, "The Name to contain at least two characters"),
  lastname: string()
    .required("Last Name is required!")
    .min(2, "The Lasta Name to contain at least two characters"),
  email: string().email().required("Email is required"),
  country: string().required("Country is required"),
  city: string().required("City is required"),
  address: string()
    .min(20, "The Address to contain at least twenty characters")
    .required("Address is required"),
  service: string().required("Service is required"),
  priority: boolean(),
});
