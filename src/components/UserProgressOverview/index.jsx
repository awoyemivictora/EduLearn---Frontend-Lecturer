import { Heading, Text } from "../../components";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";
// import { faker } from "@faker-js/faker";

export default function UserProgressOverview({
  programmingLanguageText = "Programming Language",
  programmingDescriptionText = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  inProgressText = "In Progress",
  resumeCourseText = "Resume Course",
  className = "",
  ...props
}) {
  const [progressPercentage, setProgressPercentage] = useState("79%"); // Default progress percentage

  useEffect(() => {
    // Generate a random percentage between 1 and 100
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    setProgressPercentage(`${randomPercentage}`);

    // Generate a random image by fetching from Unsplash and if null, it defaults to my image
  // const loadRandomImage = async () => {
  //   try {
  //     const imageUrl = await fetchRandomImage();
  //     // Chheck if imageUrl is null, undefined or if it has an error
  //     setAvatarUrl(imageUrl || defaultImageUrl);
  //   } catch (error) {
  //     // If thehre's an error, fall back to the default image
  //     console.error("Failed to fetch image:", error);
  //     setAvatarUrl(defaultImageUrl);
  //   }
  // };
  // loadRandomImage();
}, []);

  return (
    // Wrap everything in a single parent element (div)
    <div>
      <div
        {...props}
        className={`${className} flex flex-col w-full gap-8 px-4 py-5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}
      >
        <div className="flex items-center gap-1 self-stretch">
          <div className="relative h-[62px] w-[24%]">
            <CircularProgressbar
              strokeWidth={6}
              value={progressPercentage} // Dynamic progress value
              styles={{
                trail: { stroke: "#e7f5f2" },
                path: {
                  strokeLinecap: "square",
                  transformOrigin: "center",
                  transform: "rotate(15deg)",
                },
              }}
              className="h-[62px] flex-1"
            />
            <Heading
              size="textxl"
              as="p"
              className="absolute inset-0 m-auto h-max w-max !text-[10.63px] !text-blue_gray-700"
            >
              {progressPercentage}
            </Heading>
          </div>
          <div className="flex flex-1 flex-col items-start">
            <Heading size="text3xl" as="p" className="!text-grey_300">
              {programmingLanguageText}
            </Heading>
            <Text as="p" className="w-[96%] leading-[120%] !text-grey_200">
              {programmingDescriptionText}
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch">
          <div className="flex w-[36%] items-center justify-center gap-1 rounded-[5px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-1.5">
            <div className="h-[10px] w-[10px] rounded-[5px] bg-yellow-800" />
            <Heading
              size="text3xl"
              as="p"
              className="!font-normal !text-blue_gray-700"
            >
              {inProgressText}
            </Heading>
          </div>
          <Heading
            size="text3xl"
            as="p"
            className="!text-foundation-primary_color-p300 underline"
          >
            {resumeCourseText}
          </Heading>
        </div>
      </div>
    </div> // Single parent div to wrap everything
  );
}

// PropTypes validation
UserProgressOverview.propTypes = {
  progressPercentageText: PropTypes.string,
  programmingLanguageText: PropTypes.string,
  programmingDescriptionText: PropTypes.string,
  inProgressText: PropTypes.string,
  resumeCourseText: PropTypes.string,
  progressValue: PropTypes.number, // Ensuring progress value is a number
  className: PropTypes.string,
};
