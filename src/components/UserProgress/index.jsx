import { Heading, Text } from "../../components";
import React from "react";
import PropTypes from "prop-types";
import bgGroup from "../../assets/images/img_group_15.png";

export default function UserProgress({
  coursesInProgressText = "Courses in progress",
  coursesInProgressCount = "22",
  progressPercentageText = "+ 22%",
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex items-center md:w-full gap-2 px-1.5 py-5 bg-foundation-primary_color-p50-1 shadow-lg rounded-[12px] ${className} `}
      {...props}
    >
      <div className="flex flex-1 flex-col items-start gap-1">
        <Text size="textxl" as="p" className="!font-medium !text-blue_gray-300">
          {coursesInProgressText}
        </Text>
        <Heading size="headingxl" as="h4" className="!text-blue_gray-900">
          {coursesInProgressCount}
        </Heading>
      </div>
      <div className="flex w-[40%] flex-col items-end justify-center gap-3">
        <Heading size="headinglg" as="p" className="!text-orange-600">
          {progressPercentageText}
        </Heading>
        <div
          className="flex h-[28px] items-center justify-end self-stretch bg-cover bg-no-repeat px-2.5 py-2"
          style={{ backgroundImage: `url(${bgGroup})` }} // Dynamically set background image
        >
          <div className="h-[10px] w-[10px] rounded-[5px] bg-orange-600" />
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
UserProgress.propTypes = {
  coursesInProgressText: PropTypes.string,
  coursesInProgressCount: PropTypes.string,
  progressPercentageText: PropTypes.string,
  className: PropTypes.string,
};
