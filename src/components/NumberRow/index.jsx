import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Text } from "./..";

export default function NumberRow({
  numbers = ["29", "30", "1", "2", "3", "4", "5"], // Use an array for numbers
  className = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={`md:w-full flex-1 relative md:flex-none ${className}`}
    >
      <div className="absolute bottom-0 right-[26%] top-0 my-auto h-[24px] w-[24px] rounded-full bg-foundation-primary_color-p300 shadow-sm" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-wrap justify-center">
        {numbers.map((number, index) => (
          <Text
            key={index}
            size="textxl"
            as="p"
            className={`!font-nunito ${index < 2 ? "!text-black-900_7f" : "!text-black-900_cc"} ${index > 1 ? "ml-[18px]" : "ml-2.5"}`}
          >
            {number}
          </Text>
        ))}
      </div>
    </div>
  );
}

// PropTypes for validation
NumberRow.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string), // Prop type for numbers array
  className: PropTypes.string, // Prop type for className
};
