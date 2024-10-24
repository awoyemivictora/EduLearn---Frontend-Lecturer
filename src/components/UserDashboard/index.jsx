import { Text } from "./..";
import React from "react";
import PropTypes from "prop-types";

export default function UserDashboard({
  activeCoursesText = "Active courses",
  percentageText = "24%",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center itetms-center flex-1`}
    >
      <div className="flex flex-1 items-center">
        <div className="h-[10px] w-[10px] rounded-[5px] bg-foundation-primary_color-p300" />
        <Text
          size="text2xl"
          as="p"
          className="text-[12px] font-normal text-blue_gray-700"
        >
          {activeCoursesText}
        </Text>
      </div>
      <Text
        size="text2xl"
        as="p"
        className="text-[12px] font-normal text-grey_300"
      >
        {percentageText}
      </Text>
    </div>
  );
}

UserDashboard.propTypes = {
  activeCoursesText: PropTypes.string,
  percentageText: PropTypes.string,
  className: PropTypes.string,
};
