import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import NinConfirmationProps from "../NinConfirmationProps";
import { Heading, Img } from "..";

const data = [
  { firstNameLabel: "First name", firstNameValue: "Folasayo" },
  { firstNameLabel: "Middle name", firstNameValue: "Precious" },
  { firstNameLabel: "Last name", firstNameValue: "Ogunnaike" },
  { firstNameLabel: "Date of Birth", firstNameValue: "01-12-1978" },
];

export default function NinConfirmation({ onNext, onBack, formik }) {
  const handleNext = async () => {
    // // Mark all fields as touched to trigger validation errors immediately
    // formik.setTouched({
    //   nin: true,
    // });

    // // Validate the entire form after marking fields as touched
    // const errors = await formik.validateForm();

    // Check if there are any errors
    // const hasErrors = !!errors.nin;

    // If there are no errors, proceed to the next step
    // if (!hasErrors) {
      onNext();
//     } else {
//       console.log("Validation errors found:", formik.errors);
//     }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-[28px] bg-white-a700_33 px-14 py-16 md:p-5">
      <div className="flex w-[28%] flex-col gap-8 mdLw-full">
        <div className="flex flex-col items-center gap-1 px-14 md:px--5">
          <div>
            <Heading
              size="subtitle_text_2_bold"
              as="h1"
              className="text-[19px] font-bold text-foundation-primary_color-p50-1"
            >
              Confirm National ID
            </Heading>
            <Heading
              as="h2"
              className="text-[13px] font-medium text-foundation-primary_color-p50-0"
            >
              This helps us confirm your identity
            </Heading>
          </div>

          <div>
            <div>
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <NinConfirmationProps {...d} key={"registerfour" + index} />
                ))}
              </Suspense>
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
      </div>
    </div>
  );
}

// PropTypes validation for better type safety
NinConfirmation.propTypes = {
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
      nin: PropTypes.string, // Added 'nin' to PropTypes
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};
