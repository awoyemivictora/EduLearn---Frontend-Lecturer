import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading, DatePicker } from "../../components";
import React from "react";

export default function RegisterThree() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[720px] w-full bg-[url(/public/images/img_register.png)] bg-cover bg-no-repeat py-8 md:h-auto sm:py-5">
        <div className="flex justify-center px-14 md:px-5">
          <div className="flex flex-col items-center justify-center gap-8 rounded-[28px] bg-white-a700_33 px-14 py-16 md:w-full md:p-5">
            <div className="flex flex-col items-center gap-1 self-stretch">
              <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                Personal Information
              </Heading>
              <Heading as="h2" className="self-stretch text-center leading-[120%] !text-foundation-primary_color-p50-0">
                Let’s get started by collecting some basic information about you
              </Heading>
            </div>
            <div className="flex flex-col gap-8 self-stretch">
              <div className="flex flex-col gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                    First Name
                  </Heading>
                  <Input
                    shape="round"
                    type="text"
                    name="FirstName"
                    placeholder={'Enter first name '}
                    className="self-stretch border sm:pr-5"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                    Last Name
                  </Heading>
                  <Input
                    shape="round"
                    type="text"
                    name="LastName"
                    placeholder={'Enter last name '}
                    className="self-stretch border sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h5" className="!text-foundation-primary_color-p50-0">
                    Date of Birth
                  </Heading>
                  <DatePicker
                    name="lock"
                    placeholder={'dd/mm/yyyy'}
                    className="flex gap-[34px] self-stretch rounded-md border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3 text-[18px] text-grey_200"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h5" className="!text-foundation-primary_color-p50-0">
                    Phone Number
                  </Heading>
                  <Input
                    shape="round"
                    type="number"
                    name="PhoneNumber"
                    placeholder={'Enter phone number'}
                    className="self-stretch border sm:pr-5"
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
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 mx-12 my-auto flex h-max flex-1 flex-col items-start gap-[534px] md:mx-0 md:gap-[400px] md:p-5 sm:gap-[267px]">
          <div className="h-[40px] w-[14%] rounded-[20px] bg-grey_100" />
          <div className="ml-[344px] h-[40px] w-[20%] rounded-[20px] bg-grey_100 md:ml-0" />
        </div>
      </div>
    </>
  );
}
