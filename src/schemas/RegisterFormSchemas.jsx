import * as yup from 'yup';

export const registerForm = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  fullName: yup
    .string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),

  term: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Terms and conditions are required"),
});
