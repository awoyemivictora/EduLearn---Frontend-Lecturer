import React from "react";
import PropTypes from "prop-types";
import Input from "components/Input";

// Configuuration to map roles to their form fields
const roleBasedFields = {
  student: [
    { label: "Faculty", name: "faculty", placeholder: "Enter faculty" },
    { label: "Course", name: "course", placeholder: "Enter course" },
  ],
  lecturer: [
    {
      label: "Department",
      name: "department",
      placeholder: "Enter department",
    },
    {
      label: "Designation",
      name: "designation",
      placeholder: "Enter designation",
    },
  ],
  doctor: [
    {
      label: "Specialization",
      name: "specialization",
      placeholder: "Enter specialization",
    },
    {
      label: "Experience",
      name: "experience",
      placeholder: "Enter years of experience",
    },
  ],
  librarian: [
    {
      label: "Library Section",
      name: "librarySection",
      placeholder: "Enter library section",
    },
  ],
};

const RoleBasedForm = ({ role, formik }) => {
  const fields = roleBasedFields[role];

  if (!fields) return null; // If role doesn't exist, return null

  return (
    <>
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={formik.values[field.name]} // Dynamiically bind value
          onChange={formik.handleChange} // Ensure formik handles changes
        />
      ))}
    </>
  );
};

// PropTypes validation
RoleBasedForm.propTypes = {
  role: PropTypes.oneOf(["student", "lecturer", "doctor", "librarian"])
    .isRequired, // Ensure role is one of these
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default RoleBasedForm;
