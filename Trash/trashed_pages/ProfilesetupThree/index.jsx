import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import React from "react";

export default function ProfilesetupThree() {
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
        <div className="flex w-[40%] flex-col items-center justify-center gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:p-5">
          <div className="flex flex-col items-center gap-1">
            <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
              Successful{ " " }
            </Heading>
            <Heading as="h2" className="!text-foundation-primary_color-p50-0">
              Your profile setup was successful
            </Heading>
          </div>
          <Button
            color="foundation_primary_color_p300"
            shape="round"
            className="white_A700_33_white_A700_33_border w-full border border-solid font-medium sm:px-5"
          >
            Go to dashboard
          </Button>
        </div>
      </div>
    </>
  );
}
