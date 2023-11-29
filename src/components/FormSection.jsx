
import { useFormik } from "formik";
import React from "react";
import { Button } from "antd";
import googleLogo from "../assets/images/googleLogo.png";
import { Outlet, Link } from "react-router-dom";
const regex = /^[A-Za-z\s]*$/;
const phoneRegex = /^0[5][015]\d{7}$/;
const passRegecLower = /[a-z]/;
const passRegecUpper = /[A-Z]/;
const passRegexDigit = /\d/;

const initialValues = {
  fname: "",
  lname: "",
  phone: 0,
  email: "",
  password: "",
  cpassword: "",
  agree: "",
  remember: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.fname) {
    errors.fname = "Required";
  } else if (values.fname.length < 3) {
    errors.fname = "Name is less than 3 symbols";
  } else if (values.fname.length > 10) {
    errors.fname = "Name is more than 10 symbols";
  } else if (!values.fname.match(regex)) {
    errors.fname = "Invalid name";
  }

  if (!values.lname) {
    errors.lname = "Required";
  } else if (values.lname.length < 3) {
    errors.lname = "Last name is less than 3 symbols";
  } else if (values.lname.length > 10) {
    errors.lname = "Last name is more than 10 symbols";
  } else if (!values.lname.match(regex)) {
    errors.lname = "Invalid Last name";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!values.phone.match(phoneRegex)) {
    errors.phone = "Invalid phone number";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 1) {
    errors.password = "Password must be at least 1 character";
  } else if (
    !values.password.match(passRegecLower) ||
    !values.password.match(passRegecUpper)
  ) {
    errors.password =
      "Password must contain at least 1 uppercase and 1 lowercase letter";
  } else if (!values.password.match(passRegexDigit)) {
    errors.password = "Password must contain at least 1 digit";
  } else if (values.password.length <= 8) {
    errors.password = "Password length must be greater than 8";
  } else if (!values.password.trim()) {
    errors.password = "Password cannot be blank";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Comfirm password must be same with password";
  }

  return errors;
};

const FormSection = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      if (values.remember) {
        alert(JSON.stringify(values, null, 2));

        localStorage.setItem("user", JSON.stringify({ firstNAme: fname }));
      }
    },
  });

  return (
    <form action="">
      <div className="form">
        <div className="first-name ">
          <h6>First name</h6>
          <input
            type="text"
            name="fname"
            className="input"
            value={formik.values.fname}
            onChange={formik.handleChange}
          />
          {formik.errors.fname ? (
            <div style={{ color: "red" }}>{formik.errors.fname}</div>
          ) : null}
        </div>
        <div className="last-name" style={{ marginLeft: "32px" }}>
          <h6>Last name</h6>
          <input
            type="text"
            name="lname"
            className="input"
            value={formik.values.lname}
            onChange={formik.handleChange}
          />
          {formik.errors.lname ? (
            <div style={{ color: "red" }}>{formik.errors.lname}</div>
          ) : null}
        </div>
        <div className="email">
          <h6>Email</h6>
          <input
            type="email"
            name="email"
            className="input"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="phone" style={{ marginLeft: "32px" }}>
          <h6>Phone number</h6>
          <input
            type="text"
            name="phone"
            className="input"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="password">
          <h6>Password</h6>
          <input
            type="text"
            name="password"
            className="input"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="confirm-password" style={{ marginLeft: "32px" }}>
          <h6>Confirm password</h6>
          <input
            type="text"
            name="cpassword"
            className="input"
            value={formik.values.cpassword}
            onChange={formik.handleChange}
          />
          {formik.errors.cpassword ? (
            <div style={{ color: "red" }}>{formik.errors.cpassword}</div>
          ) : null}
        </div>

        <div className="check-inp">
          <input
            type="checkbox"
            name="remember"
            value={formik.values.remember}
            onChange={formik.handleChange}
          />
          <p>Remember me</p>
        </div>

        <p>
          <Link
            to="/forgotPass"
            style={{
              color: "blue",
              textDecoration: "none",
              textAlign: "right",
              width: "400px",
            }}
          >
            Forgot password?
          </Link>
        </p>
        <div className="agree-terms">
          <input type="checkbox" name="agree" />
          <p>
            I agree to all the <span>Terms</span> and
            <span> Privacy policy</span>
          </p>
        </div>
        <br />

        <button type="submit" className="create-account">
          create account
        </button>
        <div className="google-btn">
          <Button
            type="primary"
            className="sign-in-google"
            style={{ marginLeft: "23px" }}
            onClick={() => {
              navigate("/signInGoogle");
            }}
          >
            <Link to="/signInGoogle">Sign-in with google</Link>
          </Button>
          <div className="img">
            <img
              src={googleLogo}
              alt="google-logo"
              style={{ height: "20px" }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSection;
