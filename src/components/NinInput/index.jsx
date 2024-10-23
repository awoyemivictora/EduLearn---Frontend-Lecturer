import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";
import { Heading, Img } from "..";

const NinInput = ({ onNext, onBack, formik }) => {
  const handleNext = async () => {
    // Mark all fields as touched to trigger validation errors immediately
    formik.setTouched({
      nin: true,
    });

    // Validate the entire form after marking fields as touched
    const errors = await formik.validateForm();

    // Check if there are any errors
    const hasErrors = !!(
      errors.nin
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
        Upload National ID Card
      </h2>
      <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        This help&rsquo;s us confirm your identity
      </Heading>

     

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <Input
            label={
              <span
                className="text-white font-normal"
                style={{ color: "white" }}
              >
                National identity card
              </span>
            }
            name="nin"
            placeholder="Enter NIN"
            value={formik.values.nin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mb-1"
          />
          {formik.touched.nin && formik.errors.nin && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.nin}
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
NinInput.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      nin: PropTypes.number.isRequired,
    }).isRequired,
    touched: PropTypes.shape({
      nin: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      nin: PropTypes.number,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NinInput;
