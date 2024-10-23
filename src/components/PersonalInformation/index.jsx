import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Heading, Img } from "../../components";

const PersonalInfo = ({ onNext, onBack, formik }) => {
  const handleNext = async () => {
    // Mark all fields as touched to trigger validation errors immediately
    formik.setTouched({
      first_name: true,
      lastt_name: true,
      date_of_birth: true,
      phone_number: true,
    });

    // Validate the entire form after marking fields as touched
    const errors = await formik.validateForm();

    // Check if there are any errors
    const hasErrors = !!(
      errors.first_name ||
      errors.last_name ||
      errors.date_of_birth ||
      errors.phone_number
    );

    // If there are no errors, proceed to the next step
    if (!hasErrors) {
      onNext();
    } else {
      console.log("Validation errors found:", formik.errors);
    }
  };

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

      <h2
        className="text-center text-2xl mb-4 mt-3 text-white !important"
        style={{ color: "white" }}
      >
        Personal Information
      </h2>
      <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        Let&rsquo;s get started by collecting some basic information
      </Heading>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            label={
              <span
                className="text-white font-normal"
                style={{ color: "white" }}
              >
                First Name
              </span>
            }
            name="first_name"
            placeholder="Enter first name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-1"
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.first_name}
            </div>
          )}
        </div>
        <div>
          <Input
            label={
              <span
                className="text-white font-normal"
                style={{ color: "white" }}
              >
                Last Name
              </span>
            }
            name="last_name"
            placeholder="Enter last name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-1"
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.last_name}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <Input
            label={
              <span
                className="text-white font-normal"
                style={{ color: "white" }}
              >
                Phone Number
              </span>
            }
            name="phone_number"
            placeholder="Enter phone number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-1"
          />
          {formik.touched.phone_number && formik.errors.phone_number && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phone_number}
            </div>
          )}
        </div>
        <div>
          <Input
            label={
              <span
                className="text-white font-normal"
                style={{ color: "white" }}
              >
                Date Of Birth
              </span>
            }
            name="date_of_birth"
            type="date"
            placeholder="dd/mm/yy"
            value={formik.values.date_of_birth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-1"
          />
          {formik.touched.date_of_birth && formik.errors.date_of_birth && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.date_of_birth}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Button
          className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2"
          style={{ color: "white" }}
          rightIcon={
            <Img
              src="images/img_chevron-right.svg"
              alt="Arrow Right"
              className="h-[12px] w-[12px]"
            />
          }
          onClick={handleNext} // Use handleNext to validate before proceeding
        >
          Next
        </Button>

        <Button
          className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
          leftIcon={
            <Img
              src="images/img_chevronleft.svg"
              alt="Chevron-left"
              className="h-[12px] w-[12px]"
            />
          }
          onClick={onBack}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

// PropTypes validation for better type safetyy
PersonalInfo.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      date_of_birth: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    }).isRequired,
    touched: PropTypes.shape({
      first_name: PropTypes.bool,
      last_name: PropTypes.bool,
      date_of_birth: PropTypes.bool,
      phone_number: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      date_of_birth: PropTypes.string,
      phone_number: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PersonalInfo;
