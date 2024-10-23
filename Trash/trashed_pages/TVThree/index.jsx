import { Helmet } from "react-helmet";
import { Img } from "../../components";
import React from "react";

export default function TVThree() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-foundation-primary_color-p50-1 px-14 py-[94px] md:p-5">
        <div className="flex w-[32%] flex-col gap-2 md:w-full">
          <div className="mx-[-86px] h-[22px] rounded-[10px] bg-grey_100 md:mx-0" />
          <div className="relative h-[22px]">
            <div style={{ width: "0%" }} className="absolute h-full" />
          </div>
        </div>
        <div className="flex w-[32%] flex-col gap-6 md:w-full">
          <div className="flex flex-col gap-4">
            <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
            <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
            <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
            <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
          </div>
          <div className="flex justify-end">
            <div className="h-[12px] w-[34%] rounded-md bg-grey_100" />
          </div>
        </div>
        <div className="flex w-[28%] flex-col gap-2 md:w-full">
          <div className="h-[40px] rounded-md bg-grey_100" />
          <div className="h-[40px] rounded-md bg-grey_100" />
        </div>
      </div>
    </>
  );
}
