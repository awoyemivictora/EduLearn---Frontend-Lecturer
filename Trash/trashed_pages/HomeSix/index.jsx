import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar6 from "../../components/Sidebar6";
import React, { Suspense } from "react";

export default function HomeSix() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="mb-[232px] flex items-start">
          <Sidebar6 />
          <div className="flex flex-1 flex-col gap-9">
            <Header className="mr-6 md:mr-0" />
            <div className="ml-3.5 mr-[34px] flex flex-col items-start gap-11 md:mx-0">
              <Heading size="subtitle_text_2_bold" as="h1">
                Academic Program
              </Heading>
              <div className="flex gap-4 self-stretch md:flex-col">
                <div className="flex flex-1 flex-col items-start rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-4 md:w-full md:p-5">
                  <div className="flex flex-col items-center gap-[18px] md:flex-col">
                    <div className="mt-2 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                    <div className="mt-2 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                    <div className="mt-2 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                    <div className="mt-2 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                    <div className="mt-2 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                    <div className="mt-5 h-[40px] self-stretch rounded-lg bg-blue_gray-50_01" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[18px] rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:w-full md:p-5">
                  <div className="ml-2.5 h-[14px] w-[28%] rounded-lg bg-blue_gray-50_01 md:ml-0" />
                  <div className="mb-5 grid grid-cols-2 gap-4 self-stretch md:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(61)].map((_, index) => (
                        <div key={"homesix" + index} className="h-[134px] w-full rounded-lg bg-blue_gray-50_01" />
                      ))}
                    </Suspense>
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
