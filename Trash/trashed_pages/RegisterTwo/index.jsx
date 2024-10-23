import { Helmet } from "react-helmet";
import { Button, Img, SelectBox, Heading } from "../../components";
import React from "react";

const dropdownOptions = [
  { label: "Option1", value: "Option1" },
  { label: "Option2", value: "Option2" },
  { label: "Option3", value: "Option3" },
];

export default function RegisterTwo() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[720px] w-full items-center bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat px-12 py-[52px] md:h-auto md:mx-0 md:gap-[400px] sm:gap-[267px]">
        <div className="flex w-full flex-col items-start gap-[534px] md:gap-[400px] sm:gap-[267px]">
          <div className="h-[40px] w-[28%] rounded-[20px] bg-grey_100" />
          <div className="mr-[72px] h-[40px] w-[32%] self-end rounded-[20px] bg-grey_100 md:mr-0" />
        </div>
        <div className="w-full px-[50px] md:px-5">
          <div className="flex flex-col gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:p-5">
            <div className="flex flex-col items-center gap-1 px-14 md:px-5">
              <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                Campus Updates
              </Heading>
              <Heading as="h2" className="self-stretch text-center leading-[120%] !text-foundation-primary_color-p50-0">
                Our goal is to keep you informed about campus updates and relevant announcements
              </Heading>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                    State
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                    name="select"
                    placeholder={'Select '}
                    options={dropdownOptions}
                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h5" className="!text-foundation-primary_color-p50-0">
                    Address
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                    name="address"
                    placeholder={'Select '}
                    options={dropdownOptions}
                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  color="foundation_primary_color_p300"
                  shape="round"
                  rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                  className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
                >
                  Create Account
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
        </div>
      </div>
    </>
  );
}
