import { Text, Heading, Img, Button } from "..";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchRandomTextBooks } from "../../unsplashTextbooks";
import { CaretRight } from "phosphor-react";

export default function LibraryBooks({
  introText = "Introduction to Programming",
  descriptionText = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  ...props
}) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/books.png";

  useEffect(() => {
    // Generate a random image by fetching from Unsplash and if null, it defaults to my image
    const loadRandomImage = async () => {
      try {
        const imageUrl = await fetchRandomTextBooks();
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
      className={`${props.className} flex flex-col w-[22%] md:w-full gap-2 md:p-5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}
    >
      <Img
        src={avatarUrl}
        alt="Image"
        className="h-[122px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="mx-2 mb-6 flex flex-col items-start self-stretch">
        <Heading as="p" className="!text-grey_300">
          {introText}
        </Heading>
        <Text as="p" className="w-full leading-[120%] !text-grey_200">
          {descriptionText}
        </Text>
        <Button
          color="foundation__primary_color_p300"
          shape="round"
          rightIcon={<CaretRight />}
          // className="min-w-[96px] gap-1 white_A700_33_white_A7000_33_border text-foundation-primary_color-p50-1 bg-foundation-primary_color-p300 border border-solid font-medium sm:px-5"
          className="w-full min-w-[96px] gap-1 mt-4 white_A700_33_white_A7000_33_border text-foundation-primary_color-p50-1 bg-foundation-primary_color-p300 hover:text-gray-800 hover:bg-foundation-primary_color-p50-1 border border-solid font-medium sm:px-5"
        >
          <span className="text-left">Request for book</span>
        </Button>
      </div>
    </div>
  );
}

LibraryBooks.propTypes = {
  userImage: PropTypes.string,
  introText: PropTypes.string,
  descriptionText: PropTypes.string,
  className: PropTypes.string,
};
