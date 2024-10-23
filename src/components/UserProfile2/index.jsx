import { Heading, Img, Text } from "./..";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { fetchRandomImage } from "../../unsplashService.js";

export default function UserProfile2({
    courseTitle = "Applied mathematics",
    courseDescription = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    userTitle = "Professor",
    resumeCourseText = "Resume Course",
    ...props
}) {
    const [avatarUrl, setAvatarUrl] = useState("");
    const [progressPercentage, setProgressPercentage] = useState("79%"); // Default progress percentage
    const defaultImageUrl = "/public/images/victor.jpg";
  
    useEffect(() => {
        // Generate a random percentage between 1 and 100
        const randomPercentage = Math.floor(Math.random() * 100) + 1;
        setProgressPercentage(`${randomPercentage}%`);

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

    return (
        
        <div
            {...props}
            className={`${props.className} flex items-center w-full px-4 py-[18px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 rounded-[10px]`}
        >
            <div className="flex w-full items-center justify-center">
                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col items-start">
                            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                                {courseTitle}
                            </Heading>
                            <Text as="p" className="w-full leading-[120%] !text-grey_200">
                                {courseDescription}
                            </Text>
                        </div>
                        <div className="flex items-center">
                            <div className="relative h-[10px] w-[52%] rounded-[5px] bg-foundation-primary_color-p50-0">
                                <div
                                    style={{ width: progressPercentage }} // Set width to the progress percentage
                                    className="absolute h-full rounded-[5px] bg-foundation-primary_color-p300"

                                />
                            </div>
                            <Heading size="text3xl" as="p" className="!text-bluue_gray-700">
                                {progressPercentage}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        <Img 
                            src={avatarUrl}
                            alt="Image"
                            className="h-[34px] w-[34px] rounded-[16px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-startt">
                            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                            {faker.person.fullName()}
                            </Heading>
                            <Heading as="p">{userTitle}</Heading>
                        </div>
                    </div>
                </div>
                <Heading
                    size="text3xl"
                    as="p"
                    className="relative ml-[-82px] self-end !text-foundation-primary_color-p300 underline"
                >
                    {resumeCourseText}
                </Heading>
            </div>
        </div>
    )
}


// Define prop types
UserProfile2.propTypes = {
    courseTitle: PropTypes.string,
    courseDescription: PropTypes.string,
    progressPercentage: PropTypes.string, // can also be a number
    userName: PropTypes.string,
    userTitle: PropTypes.string,
    resumeCourseText: PropTypes.string,
    className: PropTypes.string
}