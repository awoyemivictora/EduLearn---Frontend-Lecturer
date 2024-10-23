import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "text-indigo-600",
  secondary: "text-gray-600",
};

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const Checkbox = ({
  id,
  label,
  name,
  checked,
  onChange,
  variant = "primary",
  size = "md",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="inline-flex items-center">
        <input
          type="checkbox"
          id={id} // id for accessibility
          name={name}
          checked={checked}
          onChange={onChange}
          className={`form-checkbox ${variants[variant]} ${sizes[size]} rounded`}
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

// Adding PropTypes validation
Checkbox.propTypes = {
  id: PropTypes.string.isRequired, // id is important for accessibility
  label: PropTypes.string.isRequired, // Label for the checkbox
  name: PropTypes.string.isRequired, // Name attribute for the checkbox
  checked: PropTypes.bool.isRequired, // State of the checkbox (checked/unchecked)
  onChange: PropTypes.func.isRequired, // Handler function for change events
  variant: PropTypes.oneOf(["primary", "secondary"]), // Styling variant for checkbox
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Different size options for the checkbox
};

// Default props
Checkbox.defaultProps = {
  variant: "primary",
  size: "md",
};

export default Checkbox;
