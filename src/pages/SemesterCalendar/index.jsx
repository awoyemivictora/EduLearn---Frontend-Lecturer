import { Helmet } from "react-helmet";
import { Heading, Text, Img } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import UserProfile6 from "../../components/UserProfile6";

const data = [
  {
    appliedText: "Applied mathematics",
    timeText: "10:00 AM to 12:00 PM",
    image: "images/img_frame_313770.png",
    viewdetailsText: "View details",
  },
  {
    appliedText: "Applied mathematics",
    timeText: "10:00 AM to 12:00 PM",
    image: "images/img_frame_313770.png",
    viewdetailsText: "View details",
  },
  {
    appliedText: "Applied mathematics",
    timeText: "10:00 AM to 12:00 PM",
    image: "images/img_frame_313770.png",
    viewdetailsText: "View details",
  },
];

export default function SemesterCalendar() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="mb-[74px] flex items-start gap-4">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-9 self-center">
            <Header />
            <div className="ml-4 mr-[34px] flex flex-col items-start gap-4 md:mx-0">
              <Heading
                size="subtitle_text_2_bold"
                as="h1"
                className="!text-grey_300"
              >
                Calendar
              </Heading>
              <div className="flex flex-col gap-[42px] self-stretch rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                <div className="flex flex-wrap justify-between gap-5 border-b border-solid border-gray-300_01 bg-gray-50 px-[122px] py-[18px] md:px-5">
                  <Heading as="h2" className="ml-[90px] md:ml-0">
                    Mon 06
                  </Heading>
                  <Heading as="h3">Mon 06</Heading>
                  <Heading as="h4">Mon 06</Heading>
                </div>
              </div>
              <div className="ml-[-30px] mr-2.5 flex items-start justify-between gap-5 md:mx-0">
                <Heading as="h5" className="mt-8">
                  9 AM
                </Heading>
                <div className="flex w-[28%] flex-col items-end gap-1 self-center rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-0 py-3.5">
                  <div className="flex flex-col gap-4 self-stretch">
                    <div className="flex flex-col items-start">
                      <Heading
                        size="text3xl"
                        as="h6"
                        className="!text-foundation-primary_color-p400"
                      >
                        Applied mathematics
                      </Heading>
                      <Text
                        as="p"
                        className="!text-foundation-primary_color-p400"
                      >
                        3:00 PM - 4:30 PM
                      </Text>
                    </div>
                    <Img
                      src="images/img_frame_23.png"
                      alt="Image"
                      className="h-[34px] w-[56%] object-cover"
                    />
                  </div>
                  <Text
                    size="textxl"
                    as="p"
                    className="mr-2.5 font-medium !text-foundation-primary_color-p300 underline md:mr-0"
                  >
                    View details
                  </Text>
                </div>
              </div>
              <div className="mb-1 ml-[30px] mr-2.5 flex items-center justify-between gap-5 md:mx-0 md:flex-col">
                <div className="flex flex-col items-center gap-[170px] md:gap-[127px] md:p-5 sm:gap-[85px]">
                  <Heading as="p">10 AM</Heading>
                  <Heading as="p">11 AM</Heading>
                  <Heading as="p">12 PM</Heading>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start gap-[42px] md:self-stretch md:p-5">
                <div className="flex w-[30%] flex-col items-end gap-1 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-0 py-3.5 md:w-full">
                  <div className="flex flex-col gap-4 self-stretch">
                    <div className="flex flex-col items-start">
                      <Heading
                        size="text3xl"
                        as="p"
                        className="!text-foundation-primary_color-p400"
                      >
                        Applied mathematics
                      </Heading>
                      <Text
                        as="p"
                        className="!text-foundation-primary_color-p400"
                      >
                        3:00 PM – 4:30 PM
                      </Text>
                    </div>
                    <Img
                      src="images/img_frame_23.png"
                      alt="Image"
                      className="h-[34px] w-[56%] object-cover"
                    />
                  </div>
                  <Text
                    size="textxl"
                    as="p"
                    className="mr-2.5 !font-medium !text-foundation-primary_color-p300 underline md:mr-0"
                  >
                    View details
                  </Text>
                </div>
                <div className="grid grid-cols-2 gap-7 gap-y-[34px] self-stretch md:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <UserProfile6 {...d} key={"homefour" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
