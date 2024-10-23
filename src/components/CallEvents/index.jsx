import { Text, Img, Heading } from "..";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchRandomImage } from "../../unsplashService.js";

export default function CallEvents({
  appliedMathematicsText = "Applied mathematics",
  timeText = "3:00 PM - 4:30 PM",
  othersCounterText = "24 others",
  ongoingText = "Ongoing",
  status = "ongoing",
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
    ongoing: "bg-[#FFECEB] text-[#E73A49] border-[#FFC6C2]",
    soon: "bg-[#FBEED5] text-[#EEAD33] border-[#F7D79C]",
    in2hours: "bg-[#E6F4E7] text-[#4CAF50] border-[#BFE3C0]",
  };


  return (
    <div
      {...props}
      className={`${props.className} ${statusStyles[status]} flex flex-col justify-center gap-4 px-2.5 py-[18px] border border-solid flex-1 rounded-[10px]`}
    >
      <div className="flex flex-col items-start self-stretch">
        <Heading size="text3xl" as="p" className={statusStyles[status]}>
          {appliedMathematicsText}
        </Heading>
        <Text as="p" className={statusStyles[status]}>
          {timeText}
        </Text>
      </div>

      <div className="flex items-center -space-x-2">
        {/* Render 3 circular images side-by-side */}
        {avatarUrls.map((url, index) => (
          <Img
            key={index}
            src={url}
            alt={`Avatar ${index + 1}`}
            className="h-[25px] w-[25px] rounded-full object-cover"
          />
        ))}
      </div>

      <div className="mr-1 flex items-center justify-between self-stretch">
        <Text size="textmd" as="p" className={statusStyles[status]}>
          {othersCounterText}
        </Text>
        <Text
          size="textmd"
          as="p"
          className={`self-end !font-medium ${statusStyles[status]}`}
        >
          {ongoingText}
        </Text>
      </div>
    </div>
  );
}

CallEvents.propTypes = {
  appliedMathematicsText: PropTypes.string,
  timeText: PropTypes.string,
  othersCounterText: PropTypes.string,
  ongoingText: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.oneOf(["ongoing", "soon", "in2hours"]),
};
