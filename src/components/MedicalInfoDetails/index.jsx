import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { Heading, Img } from "..";
import Select from "../Select";

const MedicalInfoDetails = ({ onNext, onBack, formik }) => {
  // Options for Blood Group, Genotype, and Sex
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const genotypes = ["AA", "AS", "SS", "AC"];
  const sexes = ["Male", "Female", "Other"];


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
       Medical
      </h2>
      <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        Tell us about your medical records
      </Heading>

    <Select
        label={
            <span className="text-white font-normal" style={{ color: "white"}}>
                Blood Group
            </span>
        }
        name="blood_group"
        options={bloodGroups.map((group) => ({
            value: group,
            label: group,
        }))}
        value={formik.values.blood_group}
        onChange={(e) => formik.setFieldValue("blood_group", e.target.value)}
        className="mb-4"
    />
    {formik.touched.blood_group && formik.errors.blood_group && (
        <div className="text-red-500">{formik.errors.blood_group}</div>
    )}


    <Select
        label={
            <span className="text-white font-normal" style={{ color: "white"}}>
                Genotype
            </span>
        }
        name="genotype"
        options={genotypes.map((genotype) => ({
            value: genotype,
            label: genotype,
        }))}
        value={formik.values.genotype}
        onChange={(e) => formik.setFieldValue("genotype", e.target.value)}
        className="mb-4"
    />
    {formik.touched.genotype && formik.errors.genotype && (
        <div className="text-red-500">{formik.errors.genotype}</div>
    )}


    <Select
        label={
            <span className="text-white font-normal" style={{ color: "white"}}>
                Sex
            </span>
        }
        name="sex"
        options={sexes.map((sex) => ({
            value: sex,
            label: sex,
        }))}
        value={formik.values.sex}
        onChange={(e) => formik.setFieldValue("blood_group", e.target.value)}
        className="mb-4"
    />
    {formik.touched.sex && formik.errors.sex && (
        <div className="text-red-500">{formik.errors.sex}</div>
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


// PropTypes validation for better type safety
MedicalInfoDetails.propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    formik: PropTypes.shape({
      values: PropTypes.shape({
        blood_group: PropTypes.string.isRequired,
        genotype: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
      }).isRequired,
      touched: PropTypes.shape({
        blood_group: PropTypes.bool,
        genotype: PropTypes.bool,
        sex: PropTypes.bool,
      }).isRequired,
      errors: PropTypes.shape({
        blood_group: PropTypes.string,
        genotype: PropTypes.string,
        sex: PropTypes.string,
      }).isRequired,
      handleChange: PropTypes.func.isRequired,
      handleBlur: PropTypes.func.isRequired,
      setTouched: PropTypes.func.isRequired,
      setFieldValue: PropTypes.func.isRequired,
      isValid: PropTypes.bool.isRequired,
    }).isRequired,
  };
  
  export default MedicalInfoDetails;
