import { CloseSVG } from "/src/assets/images/Close";
import { Button, Img, SearchBox, Heading } from "./..";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { fetchRandomImage } from "../../unsplashService.js";
import { MagnifyingGlass } from "phosphor-react";
import { BellRinging, Wallet, ArrowRight } from "phosphor-react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/victor.jpg";

  useEffect(() => {
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
    <header
      {...props}
      className={`${props.className} flex items-cend px-2.5 py-3 border-grey_100 border-b border-solid bg-foundation-primary_color-p50-1`}
    >
      <div className="mx-auto mt-1.5 flex w-full max-w-[988px] items-center justify-between gap-5 sm:w-full">
        <div className="flex w-[22%] items-center justify-center gap-1">
          <a href="#">
            <Img
              src={avatarUrl} // Generate a random avatar image using unSplash
              alt="Profile Image"
              className="h-[48px] w-[48px] rounded-[24px] object-cover"
            />
          </a>
          <div className="flex flex-1 flex-col items-start">
            <Heading
              size="subtitle_text_bold"
              as="h6"
              className="!text-grey_300 sm:text-[13px]"
            >
              {faker.person.fullName()}
            </Heading>
            <Heading as="p">Welcome back to edulearn </Heading>
          </div>
        </div>
        <div className="flex w-[60%] justify-center gap-4">
          <SearchBox
            shape="round"
            name="search"
            placeholder={`Search`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            prefix={<MagnifyingGlass size={18} />}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue("")}
                  height={12}
                  width={12}
                  fillColor="#808080ff"
                />
              ) : null
            }
            className="flex-grow gap-1 border sm:pr-5"
          />

          <a href="#">
            <Button
              size="lg"
              shape="circle"
              className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
            >
              <BellRinging size={32} />
            </Button>
          </a>
          <a href="#">
            <Button
              size="lg"
              shape="circle"
              className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
            >
              <Wallet size={32} />
            </Button>
          </a>
          {/* <Button
            shape="round"
            className="min-w-[124px] text-xs not-italic border border-solid border-gray-300_02 font-medium text-grey_200"
          >
            View activities
          </Button> */}
          <Button
            color="foundation__primary_color_p300"
            shape="round"
            rightIcon={<ArrowRight />}
            className="white_A700_33_white_A7000_33_border min-w-[124px] text-xs text-foundation-primary_color-p50-1 bg-foundation-primary_color-p300 gap-0 border border-solid font-medium sm:px-5 whitespace-nowrap"
          >
            View activities
          </Button>
        </div>
      </div>
    </header>
  );
}

// Define propTypes for better type validation
Header.propTypes = {
  className: PropTypes.string,
};
