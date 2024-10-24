import { Text, Button, Heading } from "./..";
import React from "react";
import PropTypes from "prop-types";
import { Calendar } from "phosphor-react";

export default function InfoPanel({
  titleText = "GST 101",
  descriptionText = "Lorem ipsum dolor sit amet consectetur. Placerat neque pharetra.",
  buttonText = "Today",
  dateText = "Aug 19, 2024",
  ...props
}) {
  
  // Function to generate random dates in the future to submit the assignments
  function getRandomFutureDate(yearsIntoFuture = 1) {
    const today = new Date();
    const futureYear = today.getFullYear() + Math.floor(Math.random() * yearsIntoFuture);
    const futureMonth = Math.floor(Math.random() * 12);
    const futureDay = Math.floor(Math.random() * 28); // Safe for all montths
    return new Date(futureYear, futureMonth, futureDay);
  }


  // Conditional class names based on status
  const statusStyles = {
    Tomorrow: "bg-[#FBEED5] text-[#EEAD33] border-[#F7D79C]",
    Today: "bg-[#E6F4E7] text-[#4CAF50] border-[#BFE3C0]",
  };

  // Determine the stattus class based on the confirmation button text
  const status = buttonText === "Today" ? "Today" : "Tomorrow";

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-3.5 flex-1`}
    >
      <div className="flex flex-col items-start gap-1 self-stretch">
        <Heading
          size="text4xl"
          as="p"
          className="text-[14px] font-medium text-blue_gray-700"
        >
          {titleText}
        </Heading>
        <Heading as="p" className="text-[13px] font-medium text-grey_200">
          {descriptionText}
        </Heading>
      </div>

      <div className="mb-2 flex items-center justify-center self-stretch">
        <Button
          color="deep_orange_50"
          size="xs"
          className={`min-w-[72px] rounded-[10px] px-2.5 ${statusStyles[status]}`}
        >
          {buttonText}
        </Button>
        <div className="flex flex-1 justify-end gap-1">
          <Calendar size={12} />
          <Text
            size="label"
            as="p"
            className="text-[11px] font-normal text-grey_200"
          >
            {getRandomFutureDate(2).toLocaleDateString()}
          </Text>
        </div>
      </div>
    </div>
  );
}

InfoPanel.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  buttonText: PropTypes.string,
  dateText: PropTypes.string,
  className: PropTypes.string,
};
