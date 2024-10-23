import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import { Img } from "..";
import { Link } from "react-router-dom";

const SuccessProfile = ({ onGoToLogin }) => {
  return (
    <main className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      <h2
        className="text-center text-2xl mb-4 text-white"
        role="alert"
        style={{ color: "white" }}
      >
        Successful
      </h2>

      <p className="text-center text-white mb-4" style={{ color: "white" }}>
        Your profile setup was successful
      </p>

      <Link to="/dashboard">
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
          onClick={onGoToLogin} // Use handleNext to validate before proceeding
        >
          Go to Dashboard
        </Button>
      </Link>
    </main>
  );
};

// Add prop type validation
SuccessProfile.propTypes = {
  onGoToLogin: PropTypes.func.isRequired, // Ensure onGoToLogin is a required function
};

export default SuccessProfile;
