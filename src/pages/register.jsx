import React from "react";
import { useFormik } from "formik";
import { registerForm } from "../schemas/RegisterFormSchemas"; 
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      term: false,
    },
    validationSchema: registerForm, 
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const newUser = { fullName: values.fullName, email: values.email, password: values.password };
      users.push(newUser); 
      localStorage.setItem("users", JSON.stringify(users)); 

      alert("Kullanıcı başarıyla kaydedildi!");
      navigate("/");
    },
  });

  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h2 className="text-center mb-4 text-primary">Create Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${touched.fullName && errors.fullName ? "is-invalid" : ""}`}
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.fullName && errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className={`form-check-input ${touched.term && errors.term ? "is-invalid" : ""}`}
                      type="checkbox"
                      id="term"
                      name="term"
                      checked={values.term}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label className="form-check-label" htmlFor="term">
                      Accept the Terms
                    </label>
                    {touched.term && errors.term && (
                      <div className="invalid-feedback">{errors.term}</div>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              <div className="mt-3 text-center">
                <p className="text-muted">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
