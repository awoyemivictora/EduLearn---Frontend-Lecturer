import { Button, Text, Heading } from "./..";
import React, { useEffect, useState } from "react";
import { fetchRandomImage } from "../../unsplashService.js";
import PropTypes from "prop-types";

export default function ClassSchedule({
  classTitle = "SOC 102 with Pol sci 1000 level",
  classTime = "8:00 - 8:45 AM ",
  meetingPlatform = "On google meet",
  confirmationButton = "Confirmed",
  ...props
}) {
  const [avatarUrls, setAvatarUrls] = useState([]);
  const defaultImageUrl = "/public/images/victor.jpg";

  useEffect(() => {
    const loadRandomImages = async () => {
      try {
        // Fetch 3 random images
        const imageUrls = await Promise.all([
          fetchRandomImage(),
          fetchRandomImage(),
          fetchRandomImage(),
        ]);
        // Check if any imageUrl is null or undefined and fallback to the default image
        setAvatarUrls(
          imageUrls.map((url) => (url ? url : defaultImageUrl))
        );
      } catch (error) {
        // In case of error, set all to the default image
        console.error("Failed to fetch images:", error);
        setAvatarUrls([defaultImageUrl, defaultImageUrl, defaultImageUrl]);
      }
    };
    loadRandomImages();
  }, []);


   // Conditional class names based on status
   const statusStyles = {
    Pending: "bg-[#FBEED5] text-[#EEAD33] border-[#F7D79C]",
    Confirmed: "bg-[#E6F4E7] text-[#4CAF50] border-[#BFE3C0]",
  };

  // Determine the stattus class based on the confirmation button text
  const status = confirmationButton === "Pending" ? "Pending" : "Confirmed";


  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-2 flex-1`}
    >
      <div className="flex flex-col items-start justify-center gap-0.5 self-stretch">
        <Text
          size="text2xl"
          as="p"
          className="text-[12px] font-medium text-blue_gray-700"
        >
          {classTitle}
        </Text>
        <Heading as="p" className="text-[13px] font-medium text-grey_200">
          {classTime}
        </Heading>
      </div>

      <div className="mb-1.5 flex items-center justify-between gap-5 self-stretch">
        <Text
          size="label"
          as="p"
          className="text-[11px] font-normal text-grey_200"
        >
          {meetingPlatform}
        </Text>
        <Button
          color="light_green_50"
          size="xs"
          className={`min-w-[72px] rounded-[10px] px-2.5 ${statusStyles[status]}`}
        >
          {confirmationButton}
        </Button>
      </div>
    </div>
  );
}

ClassSchedule.propTypes = {
  classTitle: PropTypes.string,
  classTime: PropTypes.string,
  meetingPlatform: PropTypes.string,
  confirmationButton: PropTypes.string,
  className: PropTypes.string,
};
