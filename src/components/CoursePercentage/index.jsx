import { Text } from "./..";
import React from "react";
import PropTypes from "prop-types";

export default function CoursePercentage({
  activeCoursesText = "Active courses",
  percentageText = "24%",
  isActive = true, // prop to chehck actitve or inactive course status
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center flex-1`}
    >
      <div className="flex flex-1 items-center">
        <div 
          className={`h-[10px] w-[10px] mr-2 rounded-[5px] ${
            isActive ? "bg-foundation-primary_color-p300" : "bg-[#E7F5F2]" // Active or Inactive color
           }`} />
        <Text>{activeCoursesText}</Text>
      </div>
      <Text size="textxl" as="p" className="!text-grey_300">
        {percentageText}
      </Text>
    </div>
  );
}

CoursePercentage.propTypes = {
  activeCoursesText: PropTypes.string,
  percentageText: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};
