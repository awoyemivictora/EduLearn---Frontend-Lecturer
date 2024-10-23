import { Helmet } from "react-helmet";
import { Button, Img, SelectBox, Heading } from "../../components";
import React from "react";

const dropdownOptions = [
  { label: "Option1", value: "Option1" },
  { label: "Option2", value: "Option2" },
  { label: "Option3", value: "Option3" },
];

export default function ProfilesetupTwo() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[720px] w-full bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat py-[52px] md:py-5">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end pl-14 pr-[98px] md:px-5">
          <div className="flex w-[42%] flex-col gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:p-5">
            <div className="flex flex-col items-center gap-1 px-14 md:px-5">
              <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                Academic Details
              </Heading>
              <Heading as="h2" className="!text-foundation-primary_color-p50-0">
                Tell us about your academic journey
              </Heading>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                    Faculty
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                    name="select1"
                    placeholder="Select"
                    options={dropdownOptions}
                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h4" className="!text-foundation-primary_color-p50-0">
                    Current Course
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                    name="select_one"
                    placeholder="Select"
                    options={dropdownOptions}
                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h5" className="!text-foundation-primary_color-p50-0">
                    Department
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                    name="select_two"
                    placeholder="Select"
                    options={dropdownOptions}
                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                  />
                </div>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noreferrer">
                <Button
                  color="foundation_primary_color_p300"
                  shape="round"
                  rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                  className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
                >
                  Next
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 mx-12 my-auto flex h-max flex-1 flex-col items-start gap-[534px] md:mx-0 md:gap-[400px] md:p-5 sm:gap-[267px]">
          <div className="h-[40px] w-[14%] rounded-[20px] bg-grey_100" />
          <div className="ml-[344px] h-[40px] w-[20%] rounded-[20px] bg-grey_100 md:ml-0" />
        </div>
      </div>
    </>
  );
}
