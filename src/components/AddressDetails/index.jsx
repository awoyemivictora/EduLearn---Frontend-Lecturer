import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { Img,  } from "../../components";

const AddressDetails = ({ onNext, onBack, formik }) => {
  // const handleNext = (e) => {
  //   e.preventDefault();
  //   if (formik.isValid) {
  //     onNext();
  //   } else {
  //     formik.setTouched({ country: true, state: true, address: true }); // Mark fields as touched if invalid
  //   }
  // };

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
        Address Details
      </h2>
      {/* <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        Let&rsquo;s get started by collecting some basic information
      </Heading> */}

      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Country
          </span>
        }
        name="country"
        options={[
          { value: "Algeria", label: "Algeria" },
          { value: "Angola", label: "Angola" },
          { value: "Benin", label: "Benin" },
          { value: "Botswana", label: "Botswana" },
          { value: "Burkina Faso", label: "Burkina Faso" },
          { value: "Burundi", label: "Burundi" },
          { value: "Cabo Verde", label: "Cabo Verde" },
          { value: "Cameroon", label: "Cameroon" },
          {
            value: "Central African Republic",
            label: "Central African Republic",
          },
          { value: "Chad", label: "Chad" },
          { value: "Comoros", label: "Comoros" },
          {
            value: "Congo (Congo-Brazzaville)",
            label: "Congo (Congo-Brazzaville)",
          },
          {
            value: "Congo (Democratic Republic)",
            label: "Congo (Democratic Republic)",
          },
          { value: "Djibouti", label: "Djibouti" },
          { value: "Egypt", label: "Egypt" },
          { value: "Equatorial Guinea", label: "Equatorial Guinea" },
          { value: "Eritrea", label: "Eritrea" },
          { value: "Eswatini (Swaziland)", label: "Eswatini (Swaziland)" },
          { value: "Ethiopia", label: "Ethiopia" },
          { value: "Gabon", label: "Gabon" },
          { value: "Gambia", label: "Gambia" },
          { value: "Ghana", label: "Ghana" },
          { value: "Guinea", label: "Guinea" },
          { value: "Guinea-Bissau", label: "Guinea-Bissau" },
          { value: "Ivory Coast", label: "Ivory Coast" },
          { value: "Kenya", label: "Kenya" },
          { value: "Lesotho", label: "Lesotho" },
          { value: "Liberia", label: "Liberia" },
          { value: "Libya", label: "Libya" },
          { value: "Madagascar", label: "Madagascar" },
          { value: "Malawi", label: "Malawi" },
          { value: "Mali", label: "Mali" },
          { value: "Mauritania", label: "Mauritania" },
          { value: "Mauritius", label: "Mauritius" },
          { value: "Morocco", label: "Morocco" },
          { value: "Mozambique", label: "Mozambique" },
          { value: "Namibia", label: "Namibia" },
          { value: "Niger", label: "Niger" },
          { value: "Nigeria", label: "Nigeria" },
          { value: "Rwanda", label: "Rwanda" },
          { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
          { value: "Senegal", label: "Senegal" },
          { value: "Seychelles", label: "Seychelles" },
          { value: "Sierra Leone", label: "Sierra Leone" },
          { value: "Somalia", label: "Somalia" },
          { value: "South Africa", label: "South Africa" },
          { value: "South Sudan", label: "South Sudan" },
          { value: "Sudan", label: "Sudan" },
          { value: "Tanzania", label: "Tanzania" },
          { value: "Togo", label: "Togo" },
          { value: "Tunisia", label: "Tunisia" },
          { value: "Uganda", label: "Uganda" },
          { value: "Zambia", label: "Zambia" },
          { value: "Zimbabwe", label: "Zimbabwe" },
          // Add more countries
        ]}
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mb-4"
      />
      {formik.touched.country && formik.errors.country && (
        <div className="text-red-500">{formik.errors.country}</div>
      )}
      <Input
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            State
          </span>
        }
        name="state"
        placeholder="Enter your state"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mb-4"
      />
      {formik.touched.state && formik.errors.state && (
        <div className="text-red-500">{formik.errors.state}</div>
      )}
      <Input
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Address
          </span>
        }
        name="address"
        placeholder="Enter your address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mb-4"
      />
      {formik.touched.address && formik.errors.address && (
        <div className="text-red-500">{formik.errors.address}</div>
      )}

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
          onClick={onNext} // Use handleNext to validate before proceeding
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

// PropTypes for validation
AddressDetails.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      country: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    touched: PropTypes.shape({
      country: PropTypes.bool,
      state: PropTypes.bool,
      address: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      country: PropTypes.string,
      state: PropTypes.string,
      address: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AddressDetails;
