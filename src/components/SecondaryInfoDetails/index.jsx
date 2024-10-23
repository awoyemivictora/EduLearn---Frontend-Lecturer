import React from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import Button from "../Button";
import { Img, Heading, Input } from "..";

const SecondaryInfoDetails = ({ onNext, onBack, formik }) => {
  // SSCE Exam Types in Nigeria
  const ssceExamTypes = ["WAEC", "NECO", "GCE", "NABTEB"];

  // Generate past years from 1980 to current year
  const getPastYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1980; year--) {
      years.push(year);
    }
    return years;
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
        Academic Information
      </h2>
      <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        Tell us about your academic journey{" "}
      </Heading>

      {/* <div className="mb-4">
        <label style={{ color: "white" }}>Secondary School Name</label>
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Secondary School Name
          </span>
        }
        <input
            type="text"
            name="secondary_school"
            value={formik.values.secondary_school}
            onChange={formik.handleChange}
            className="w-full p-2 rounded"
            placeholder="Enter your secondary school name"
        />
      </div> */}

      <Input
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Secondary School Name
          </span>
        }
        name="secondary_school"
        placeholder="Enter your secondary school name"
        value={formik.values.secondary_school}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mb-4"
      />
      {formik.touched.secondary_school && formik.errors.secondary_school && (
        <div className="text-red-500">{formik.errors.secondary_school}</div>
      )}

      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            SSCE Exam Type
          </span>
        }
        name="ssce_exam_type"
        options={ssceExamTypes.map((exam) => ({
          value: exam,
          label: exam,
        }))}
        value={formik.values.ssce_exam_type}
        onChange={(e) =>
          formik.setFieldValue("sscee_exam_type", e.target.value)
        }
        className="mb-4"
      />
      <Select
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            Exam Year
          </span>
        }
        name="exam_year"
        options={getPastYears().map((year) => ({
          value: year,
          label: year.toString(),
        }))}
        value={formik.values.exam_year}
        onChange={(e) => formik.setFieldValue("exam_year", e.target.value)}
        className="mb-4"
      />

      <Input
        label={
          <span className="text-white font-normal" style={{ color: "white" }}>
            JAMB Score
          </span>
        }
        type="number"
        name="jamb_score"
        placeholder="Enter your jamb score"
        value={formik.values.jamb_score}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mb-4"
      />
      {formik.touched.jamb_score && formik.errors.jamb_score && (
        <div className="text-red-500">{formik.errors.jamb_score}</div>
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

// PropTypes validattion for better type safety
SecondaryInfoDetails.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      secondary_school: PropTypes.string.isRequired,
      ssce_exam_type: PropTypes.string.isRequired,
      exam_year: PropTypes.string.isRequired,
      jamb_score: PropTypes.number,
    }).isRequired,
    touched: PropTypes.shape({
      secondary_school: PropTypes.bool,
      ssce_exam_type: PropTypes.bool,
      exam_year: PropTypes.bool,
      jamb_score: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      secondary_school: PropTypes.string,
      ssce_exam_type: PropTypes.string,
      exam_year: PropTypes.string,
      jamb_score: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SecondaryInfoDetails;
