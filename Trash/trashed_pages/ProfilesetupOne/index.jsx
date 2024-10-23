import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import React from "react";

export default function ProfilesetupOne() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[720px] w-full bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat py-[52px] md:py-5">
        <div className="absolute bottom-0 left-[17%] top-0 flex h-max items-center justify-end pl-[14px] pr-[10px] md:px-5">
          <div className="flex w-[42%] flex-col gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:py-5">
            <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
              Profile Image
            </Heading>
            <Heading as="h2" className="!text-foundation-primary_color-p50-0">
              Upload a profile picture* {""}
            </Heading>
            <div className="flex items-start gap-2.5 rounded-[12px] border border-solid border-white-a700_63 bg-white-a700_28 p-4">
              <Img
                src="images/img_ellipse_746.png"
                alt="Image"
                className="h-[54px] w-[54px] rounded-[26px] object-cover"
              />
              <div className="flex flex-1 flex-col items-start gap-2 self-center">
                <Heading size="heading3" as="h3" className="text-foundation-primary_color-p50-1">
                  Profile Picture
                </Heading>
                <Heading as="h4" className="!font-normal !text-foundation-primary_color-p50-1">
                  Upload 480x480px, PNG or JPG
                </Heading>
              </div>
              <Button
                shape="round"
                className="min-w-[108px] border border-gray-300_02 font-medium text-grey_200 shadow-xs"
              >
                Change Image
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                color="foundation_primary_color_p300"
                shape="round"
                rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
              >
                Next
              </Button>
              <Button
                shape="round"
                leftIcon={<Img src="images/img_chevronleft.svg" alt="Chevron-left" className="h-[12px] w-[12px]" />}
                className="w-full gap-1 border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs sm:px-5"
              >
                Go back
              </Button>
            </div>
          </div>
        </div>
        <div className="container-xs absolute bottom-0 left-8 right-0 top-8 mx-12 my-auto flex h-max flex-1 flex-col items-start gap-[534px] md:mx-0 md:gap-[400px] md:p-5 sm:gap-[267px] w-[42%]">
          <div className="h-[40px] w-[24%] rounded-[20px] bg-grey_100" />
          <div className="h-[344px] h-[40px] w-[26%] rounded-[20px] bg-grey_100 md:ml-0" />
        </div>
      </div>
    </>
  );
}
