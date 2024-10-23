import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading } from "../../components";
import React from "react";

export default function RegisterFive() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[720px] w-full bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
        <div className="flex flex-col items-center justify-center rounded-[28px] bg-white-a700_33 px-14 py-16 md:px-5">
          <div className="flex w-[28%] flex-col items-center gap-8 md:w-full">
            <div className="h-[68px] rounded-[34px] bg-foundation-primary_color-p50-1" />
            <div className="flex flex-col items-center gap-8 self-stretch px-14 md:px-5">
              <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                Security
              </Heading>
              <Heading as="h2" className="!text-foundation-primary_color-p50-0">
                Setup a secured password
              </Heading>
            </div>
          </div>
          <div className="flex flex-col gap-8 self-stretch">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-1">
                <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                  New Password
                </Heading>
                <Input
                  shape="round"
                  type="password"
                  name="newpassword"
                  placeholder={`Enter password`}
                  suffix={<Img src="images/img_eye.svg" alt="Eye" className="h-[12px] w-[12px]" />}
                  className="gap-[34px] self-stretch border"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <Heading as="h4" className="!text-foundation-primary_color-p50-0">
                  Confirm Password
                </Heading>
                <Input
                  shape="round"
                  type="password"
                  name="confirmpassword"
                  placeholder={`Enter password`}
                  suffix={<Img src="images/img_eye.svg" alt="Eye" className="h-[12px] w-[12px]" />}
                  className="gap-[34px] self-stretch border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                color="foundation_primary_color_p300"
                shape="round"
                className="white_A700_33_white_A700_33_border w-full border border-solid font-medium sm:px-5"
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
    </>
  );
}
