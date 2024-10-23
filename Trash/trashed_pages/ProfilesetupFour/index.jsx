import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import React from "react";

export default function ProfilesetupFour() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[720px] w-full items-center justify-center bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat px-12 py-[52px] md:h-auto md:flex-col md:p-5">
        <div className="flex w-[56%] flex-col items-start gap-[534px] md:w-full md:gap-[400px] sm:gap-[267px]">
          <div className="h-[40px] w-[26%] rounded-[20px] bg-grey_100" />
          <div className="mr-[146px] h-[40px] w-[32%] self-end rounded-[20px] bg-grey_100 md:mr-0" />
        </div>
        <div className="flex w-[40%] flex-col gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:p-5">
          <div className="flex flex-col items-center gap-1">
            <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
              Welcome Student
            </Heading>
            <Heading as="h2" className="self-stretch text-center leading-[120%] !text-foundation-primary_color-p50-0">
              We&#39;re excited to have you join our community, let’s setup your student profile in just a few steps
            </Heading>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fzk0sz7I" target="_blank" rel="noreferrer">
            <Button
              color="foundation_primary_color_p300"
              shape="round"
              rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
              className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
            >
              Setup Profile
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
