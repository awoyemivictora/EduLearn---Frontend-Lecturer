import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Img } from "../../components";
// import { Heading } from "../../components";
import PropTypes from "prop-types";

const SecurityDetails = ({ onNext, onBack, formik }) => {
  return (
    <div className="max-w-lg mx-auto mt-1 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      {/* Form Container */}
      <div className="flex flex-col items-center gap-2">
            <Img
              src="images/img_logo.png"
              alt="Logo"
              className="h-20 w-50 object-contain"
            />
          </div>
      <h2 className="text-center text-2xl mb-4 mt-3 text-white !important" style={{ color: 'white' }}>Security Information</h2>
      {/* <Heading as="h2" className="text-white text-center mb-4 font-normal" style={{ color: 'white' }}>
        Let&rsquo;s get started by collecting some basic information
      </Heading> */}

      <Input
        label={<span className="text-white font-normal" style={{ color: 'white' }}>Email</span>}
        name="email"
        placeholder="Enter your email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // Mark the field as touched on blur
        className="mb-4"
      />
      {formik.touched.email && formik.errors.email && (
        <div className="text-red-500 mb-2">{formik.errors.email}</div>
      )}

      <Input
        label={<span className="text-white font-normal" style={{ color: 'white' }}>Username</span>}
        name="username"
        placeholder="Choose a username"
        type="text"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // Mark the field as touched on blur
        className="mb-4"
      />
      {formik.touched.username && formik.errors.username && (
        <div className="text-red-500 mb-2">{formik.errors.username}</div>
      )}

      <Input
        label={<span className="text-white font-normal" style={{ color: 'white' }}>Password</span>}
        name="password"
        type="password"
        placeholder="Create a password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // Mark the field as touched on blur
        className="mb-4"
      />
      {formik.touched.password && formik.errors.password && (
        <div className="text-red-500 mb-2">{formik.errors.password}</div>
      )}


      <Input
        label={<span className="text-white font-normal" style={{ color: 'white' }}>Confirm Password</span>}
        name="confirm_password"
        type="password"
        placeholder="Confirm your password"
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // Mark the field as touched on Blur
        className="mb-4"
      />
      {formik.touched.confirm_password && formik.errors.confirm_password && (
        <div className="text-red-500 mb-2">{formik.errors.confirm_password}</div>
      )}

      <div className="flex flex-col gap-2 mt-4">
        <Button
          className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2"
          style={{ color: 'white' }}
          rightIcon={<Img src="images/img_chevron-right.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
          // onClick={formik.handleSubmit} // Use handleNext to validate before proceeding
          onClick={onNext} // Use handleNext to validate before proceeding
          type="submit"
          disabled={formik.isSubmitting} // Optionally disable the button while submitting
        >
          Create Account
        </Button>

        <Button
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
          leftIcon={<Img src="images/img_chevronleft.svg" alt="Chevron-left" className="h-[12px] w-[12px]" />}
          onClick={onBack}
          type="button"
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

// PropTypes validation for better type safety
SecurityDetails.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      confirm_password: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    touched: PropTypes.shape({
      email: PropTypes.bool,
      username: PropTypes.bool,
      password: PropTypes.bool,
      confirm_password: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      email: PropTypes.string,
      username: PropTypes.string,
      password: PropTypes.string,
      confirm_password: PropTypes.string,
    }).isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SecurityDetails;
