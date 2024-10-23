import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// Using forwardRef to allow passing a ref to the input element
const Input = forwardRef(function InputComponent(
  {
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    onBlur,
    suffix,
    togglePasswordVisibility,
  },
  ref,
) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur} // Handle formik's blur event
          ref={ref} // Attach the ref to the input element here
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autoComplete={type === "password" ? "new-password" : "off"} // Improved accessibility
        />
        {suffix && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility} // Toggle password visibility
            role="button" // Indicate that this is a button
            aria-label="Toggle password visibility" // Accessibility improvement
            tabIndex={0} // Make it focusable
            onKeyDown={(e) => e.key === "Enter" && togglePasswordVisibility()} // Allow toggling with Enter key
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input"; // Assign a display name to the component

Input.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  suffix: PropTypes.node, // This will be the eye icon component
  togglePasswordVisibility: PropTypes.func, // Function to toggle password visibility
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  suffix: null,
  togglePasswordVisibility: () => {},
};

export default Input;

