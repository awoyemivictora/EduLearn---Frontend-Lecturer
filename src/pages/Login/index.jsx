import { Helmet } from "react-helmet";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/img_register.png";
import { Img } from "../../components";
// import { Heading } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const inputRef = useRef(null); // To set the username input field focused on page loads

  useEffect(() => {
    // Focus the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Validation schema
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      rememberme: false,
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .required("Email, Username or Phone number is required")
        .test(
          "is-valid",
          "Please enter a valid Email, Username or Phone number",
          (value) => {
            const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            const phonePattern = /^\+?\d{10,15}$/;
            return (
              emailPattern.test(value) ||
              phonePattern.test(value) ||
              value.length >= 3
            );
          },
        ),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // const data = await response.json();
          alert("Login successful!");
          // Handle successful login, such as storing tokens and redirecting
          navigate("/dashboard"); // Example: Redirect to the dashboard
        } else {
          const errorData = await response.json();
          alert("Login failed: " + errorData.detail);
        }
      } catch (error) {
        console.error("Error", error);
        alert("An error occured. Please try again.");
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      {/* Background Image Container */}
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Green Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#18614cE5" }}
        ></div>

        {/* Form Container */}
        <div className="relative bg-[#488779] bg-opacity-35 p-8 rounded-lg max-w-md w-full backdrop-filter backdrop-blur-md">
          <div className="flex flex-col items-center gap-2">
            <Img
              src="images/img_logo.png"
              alt="Logo"
              className="h-20 w-50 object-contain"
            />
            {/* <h2
              className="text-center text-2xl mb-1 mt-3 text-white !important"
              style={{ color: "white" }}
            >
              Welcome Back
            </h2> */}
            {/* <Heading
              as="h2"
              className="text-white text-center py-1 font-normal"
              style={{ color: "white" }}
            >
              Log in to your EduLearn account and explore a world of learning
            </Heading> */}
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div>
              <Input
                label={
                  <span
                    className="text-white font-normal"
                    style={{ color: "white" }}
                  >
                    Email, Username or Phone Number
                  </span>
                }
                name="identifier"
                placeholder="Enter email, username or phone number"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mb-4"
                ref={inputRef}
                type="text"
              />
              {formik.touched.identifier && formik.errors.identifier && (
                <div className="text-red-500">{formik.errors.identifier}</div>
              )}
            </div>

            <div>
              <Input
                label={
                  <span
                    className="text-white font-normal"
                    style={{ color: "white" }}
                  >
                    Password
                  </span>
                }
                shape="round"
                type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                name="password"
                placeholder="Enter password"
                suffix={
                  <Img src="images/img_eye.svg" alt="Eye" className="h-3 w-3" />
                }
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-opacity-70 backdrop-filter backdrop-blur-lg"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                togglePasswordVisibility={togglePasswordVisibility} // Pass the toggle function
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberme"
                  name="rememberme"
                  checked={formik.values.rememberme}
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="rememberme"
                  className="text-white font-normal"
                  style={{ color: "white" }}
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-white text-sm"
                style={{ color: "white", fontSize: "14px" }}
              >
                Forgot password?
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2"
                style={{ color: "white" }}
              >
                Login
              </Button>

              <Button
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
                rightIcon={
                  <Img
                    src="images/img_chevron-right-black.svg"
                    alt="Arrow Right"
                    className="h-[12px] w-[12px]"
                  />
                }
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


