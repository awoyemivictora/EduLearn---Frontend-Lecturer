import { Heading } from "./..";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ExamIntroduction = ({
  introductionText = "Introduction to Business",
  examDuration,
  startExamText = "Start exam",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-3 px-14 py-[100px] md:p-5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}
    >
      <Heading size="subtitle_text_bold" as="h6" className="!text-grey_300">
        {introductionText}
      </Heading>
      <Heading size="h2_bold" as="h3" className="!text-grey_300">
       <span className="text-grey_300">00:</span>
       <span className="text-grey_300">30</span>
       <span className="text-grey_300">:</span>
       <span className="text-grey_200">00</span>
      </Heading>
      <Heading
        size="text3xl"
        as="p"
        className="!text-foundation-primary_color-p300 underline"
      >
        {startExamText}
      </Heading>
    </div>
  );
};

// Prop validation using PropTypes
ExamIntroduction.propTypes = {
  introductionText: PropTypes.string, // Introduction text should be a string
  examDuration: PropTypes.string, // Duration can also be string (you can modify based on the data type)
  startExamText: PropTypes.string, // Start exam text should be a string
  className: PropTypes.string, // Optional className should be a string
};

// Assign display name for ESLint compliance
ExamIntroduction.displayName = "ExamIntroduction";

export default ExamIntroduction;
