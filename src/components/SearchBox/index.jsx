import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
};

const variants = {
  outline: {
    grey_100: "border border-grey-100",
  },
  fill: {
    foundation__primary_color_p50_1: "bg-foundation-primary_color-p50-1 text-grey_200",
  },
};

const sizes = {
  xs: "h-8 px-3 text-xs", // Adjust height for small size
  md: "h-12 pl-3 pr-8 text-sm", // Moderate size for better UX
  sm: "h-10 px-4 text-base", // Regular size for mobile and small screens
};

const SearchBox = forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "foundation__primary_color_p50_1",
      ...restProps
    },
    ref,
  ) => {
    return (
      <div className={`w-full ${className}`}>
        {!!label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div
          className={`flex items-center ${shapes[shape] || ""} ${
            variants[variant]?.[color] || variants[variant] || ""
          } ${sizes[size] || ""} transition-all duration-200 ease-in-out w-full`}
        >
          {!!prefix && <span className="mr-2">{prefix}</span>}
          <input
            ref={ref}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full border-0 bg-transparent focus:ring-0 text-gray-900 placeholder-gray-400"
            {...restProps}
          />
          {!!suffix && <span className="ml-2">{suffix}</span>}
        </div>
      </div>
    );
  },
);

SearchBox.displayName = "Input";

SearchBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["grey_100", "foundation__primary_color_p50_1"]),
};

export default SearchBox;
