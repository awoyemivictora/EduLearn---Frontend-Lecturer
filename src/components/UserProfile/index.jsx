import { Text, Heading, Img } from "..";
import React from "react";
import PropTypes from "prop-types";

export default function UserProfile({
  introText = "Introduction to Programming",
  descriptionText = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-1.5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}
    >
      <Img
        src="images/img_rectangle_361.png"
        alt="Image"
        className="h-[104px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="mb-2.5 ml-2 mr-3 flex flex-col items-start self-stretch">
        <Heading as="p" className="!text-grey_300">
          {introText}
        </Heading>
        <Text as="p" className="w-full leading-[120%] !text-grey_200">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}


// Add propTypes validation
UserProfile.propTypes = {
  introText: PropTypes.string,
  descriptionText: PropTypes.string,
  className: PropTypes.string, // Assuming props may include className
}