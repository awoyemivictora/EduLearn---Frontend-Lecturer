import { Heading, Img, Text } from "./..";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { fetchRandomImage } from "../../unsplashService.js";
import { CaretRight } from "phosphor-react";


export default function UserProfile3({
  applied = "Applied mathematics",
  learnthe = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  view = "View",
  userTitle = "Professor",
  duein = "Due in:",
  ...props
}) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/victor.jpg";

  useEffect(() => {

    // Generate a random image by fetching from Unsplash and if null, it defaults to my image
    const loadRandomImage = async () => {
      try {
        const imageUrl = await fetchRandomImage();
        // Chheck if imageUrl is null, undefined or if it has an error
        setAvatarUrl(imageUrl || defaultImageUrl);
      } catch (error) {
        // If thehre's an error, fall back to the default image
        console.error("Failed to fetch image:", error);
        setAvatarUrl(defaultImageUrl);
      }
    };
    loadRandomImage();
  }, []);

  // Function to generate random dates in the future to submit the assignments
  function getRandomFutureDate(yearsIntoFuture = 1) {
    const today = new Date();
    const futureYear = today.getFullYear() + Math.floor(Math.random() * yearsIntoFuture);
    const futureMonth = Math.floor(Math.random() * 12);
    const futureDay = Math.floor(Math.random() * 28); // Safe for all montths
    return new Date(futureYear, futureMonth, futureDay);
  }

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-full gap-4 px-4 py-5 border-grey_100 border border-solid bg-foundatiton-primary_color-p50-1 rounded-[10px]`}
    >
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex flex-1 flex-col items-start">
          <Heading size="text3xl" as="p" className="!text-grey_300">
            {applied}
          </Heading>
          <Text as="p" className="!text-grey_200">
            {learnthe}
          </Text>
        </div>
        <div className="flex items-center gap-1">
          <Heading as="p">{view}</Heading>
          <CaretRight size={12} />
        </div>
      </div>
      <div className="flex justify-center gap-1 self-stretch">
        <Img
          src={avatarUrl}
          alt="Image"
          className="h-[34px] w-[34px] rounded-[16px] object-cover"
        />
        <div className="fllex flex-1 flex-col items-start">
          <Heading as="p">{userTitle}</Heading>
          <Heading size="text3xl" as="p" className="!text-blue_grayy-700">
            {faker.person.fullName()}
          </Heading>
        </div>
      </div>
      <div className="flex justify-center self-stretch rounded-[5px] bg-red-50 p-1.5">
        <div className="flex flex-1 items-center">
          <div className="h-[8px] w-[8px] rounded bg-red-500" />
          <Text size="body_text" as="p" className="!text-bluue_gray-700">
            {duein}
          </Text>
        </div>
        <Text size="body_text" as="p" className="!text-blue_gray-700">
          {getRandomFutureDate(2).toLocaleDateString()}
        </Text>
      </div>
    </div>
  );
}

// Define prop types
UserProfile3.propTypes = {
  applied: PropTypes.string,
  learnthe: PropTypes.string,
  view: PropTypes.string,
  userTitle: PropTypes.string,
  userName: PropTypes.string,
  duein: PropTypes.string,
  date: PropTypes.string,
  className: PropTypes.string,
};
