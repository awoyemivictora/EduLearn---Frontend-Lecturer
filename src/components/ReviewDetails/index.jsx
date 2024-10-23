import React from "react";
import PropTypes from "prop-types";

const ReviewDetails = ({
  personalInfo,
  roleInfo,
  address,
  selectedRole,
  onSubmit,
  onBack,
}) => {
  return (
    <div className="max-w-lg mx-auto mt-1 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      <h2 className="text-2xl font-bold mb-4">Review Your Details</h2>

      <div className="mb-4">
        <p>
          <strong>Role:</strong> {selectedRole || "N/A"}
        </p>
        <p>
          <strong>Name:</strong> {personalInfo?.first_name || "N/A"}{" "}
          {personalInfo?.last_name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {personalInfo?.email || "N/A"}
        </p>
        <p>
          <strong>Phone Number:</strong> {personalInfo?.phone_number || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {address?.address || "N/A"},{" "}
          {address?.state || "N/A"}, {address?.country || "N/A"}
        </p>
      </div>

      {/* Display role-specific info */}
      <div className="mb-4">
        {roleInfo && Object.keys(roleInfo).length > 0 ? (
          Object.keys(roleInfo).map((key) => (
            <p key={key}>
              <strong>
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpeerCase())}
                :
              </strong>{" "}
              {roleInfo[key] || "N/A"}
            </p>
          ))
        ) : (
          <p>No role-specific information available.</p>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-400 text--black rounded-lg px-4 py-2"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px--4 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// PropTypes validation for better type safety
ReviewDetails.propTypes = {
  personalInfo: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
  roleInfo: PropTypes.object.isRequired,
  address: PropTypes.shape({
    address: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  selectedRole: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ReviewDetails;
