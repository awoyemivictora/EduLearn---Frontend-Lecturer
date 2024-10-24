import { Img, } from "..";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchRandomImage } from "../../unsplashService.js";

export default function AvatarImages() {
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
        setAvatarUrls(imageUrls.map((url) => (url ? url : defaultImageUrl)));
      } catch (error) {
        // In case of error, set all to the default image
        console.error("Failed to fetch images:", error);
        setAvatarUrls([defaultImageUrl, defaultImageUrl, defaultImageUrl]);
      }
    };
    loadRandomImages();
  }, []);

  return (
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
  );
}

AvatarImages.propTypes = {
  appliedMathematicsText: PropTypes.string,
  timeText: PropTypes.string,
  othersCounterText: PropTypes.string,
  ongoingText: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.oneOf(["ongoing", "soon", "in2hours"]),
};
