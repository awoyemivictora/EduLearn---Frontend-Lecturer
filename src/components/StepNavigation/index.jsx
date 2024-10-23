import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const StepNavigation = ({ currentStep, totalSteps, onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 1 && (
        <Button
          variant="fill"
          color="foundation__primary_color_p300"
          onClick={onBack}
        >
          Back
        </Button>
      )}
      {currentStep < totalSteps ? (
        <Button
          variant="fill"
          color="foundation__primary_color_p300"
          onClick={onNext}
        >
          Next
        </Button>
      ) : (
        <Button
          variant="fill"
          color="foundation__primary_color_p300"
          type="submit"
        >
          Submit
        </Button>
      )}
    </div>
  );
};

StepNavigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default StepNavigation;
