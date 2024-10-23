import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import CallEvents from "../../components/CallEvents";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

import {
  Microphone,
  VideoCamera,
  Phone,
  Airplay,
  DotsThreeVertical,
} from "phosphor-react";

const data = [
  {
    appliedMathematicsText: "Applied mathematics",
    timeText: "3:30 PM - 4:30 PM",
    othersone: "images/img_frame_23.png",
    othersCounterText: "24 others",
    ongoingText: "Ongoing",
    status: "ongoing",
  },
  {
    appliedMathematicsText: "Applied mathematics",
    timeText: "5:00 PM - 7:30 PM",
    othersone: "images/img_frame_23.png",
    othersCounterText: "24 others",
    ongoingText: "In 2 hours",
    status: "in2hours",
  },
  {
    appliedMathematicsText: "Applied mathematics",
    timeText: "Feb 16th, 2024",
    othersone: "images/img_frame_23.png",
    othersCounterText: "24 others",
    ongoingText: "Coming soon",
    status: "soon",
  },
  {
    appliedMathematicsText: "Applied mathematics",
    timeText: "Feb 16th, 2024",
    othersone: "images/img_frame_23.png",
    othersCounterText: "24 others",
    ongoingText: "Coming soon",
    status: "soon",
  },
];

export default function LiveEvents() {
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
        <div className="flex items-start">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-9">
            <Header />
            <div className="ml-3.5 mr-[34px] flex flex-col items-start gap-6 md:mx-0">
              <Heading
                size="subtitle_text_2_bold"
                as="h1"
                className="!text-grey_300"
              >
                Live Events{" "}
              </Heading>

              {/* Main flex container */}
              <div className="flex gap-4 self-stretch md:flex-col">
                {/* Left Side - Call Events */}
                <div className="w-[28%] md:w-full md:p-5">
                  <div className="flex flex-col items-start gap-3 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50_1 px-2.5 py-1.5 pb-2 mb-5">
                    <Heading as="h2" className="mt-2">
                      Events
                    </Heading>
                    <div className="flex flex-col gap-2 self-stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <CallEvents
                            {...d}
                            key={"Liveevents" + index}
                            // className="border-deep_orange-100 bg-red-50"
                            status={d.status}
                          />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>

                {/* Right Side - Applied Mathematics */}
                <div className="flex-1 md:self-stretch md:p-5">
                  <div className="rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50_1 p-5">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Heading as="h3">Applied mathematics</Heading>
                        <Heading as="h4">11:41 AM</Heading>
                      </div>
                      <Img
                        src="/images/calling.png"
                        alt="Image"
                        className="mt-10 h-[336px] w-full rounded-[10px] object-cover md:h-auto"
                      />
                      <div className="mt-5 flex gap-2.5 p-2.5">
                        <Button
                          size="lg"
                          shape="circle"
                          className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
                        >
                          <Microphone size={32} />
                        </Button>
                        <Button
                          size="lg"
                          shape="circle"
                          className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
                        >
                          <VideoCamera size={32} />
                        </Button>
                        <Button
                          color="red_500"
                          size="lg"
                          shape="circle"
                          className="w-[40px] !rounded-[20px] border border-solid border-grey_100 bg-[#FF392B] text-foundation-primary_color-p50-1"
                        >
                          <Phone size={32} />
                        </Button>
                        <Button
                          size="lg"
                          shape="circle"
                          className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
                        >
                          <Airplay size={32} />
                        </Button>
                        <Button
                          size="lg"
                          shape="circle"
                          className="w-[40px] !rounded-[20px] border border-solid border-grey_100"
                        >
                          <DotsThreeVertical size={32} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
