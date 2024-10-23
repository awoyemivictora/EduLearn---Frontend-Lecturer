import { Text, Heading, Img } from "..";
import React from "react";
import PropTypes from "prop-types";
import { CaretRight } from "phosphor-react";

export default function ClassProfile({
  classTitle = "Johnson's Class",
  classDescription = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-4 py-2 flex-1`}
    >
      <div className="flex flex-1 flex-col items-start">
        <Heading size="text3xl" as="p" className="!text-grey_300">
          {classTitle}
        </Heading>
        <Text as="p" className="!text-grey_200">
          {classDescription}
        </Text>
      </div>

      <CaretRight size={12} />
    </div>
  );
};

ClassProfile.propTypes = {
  classTitle: PropTypes.string,
  classDescription: PropTypes.resetWarningCache,
  className: PropTypes.string,
};
