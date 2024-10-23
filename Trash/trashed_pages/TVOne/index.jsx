import { Helmet } from "react-helmet";
import { Img } from "../../components";
import React from "react";

export default function TVOne() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gray-100_01 px-14 py-[72px] md:p-5">
        <div className="flex w-[40%] flex-col gap-8 rounded-[28px] bg-white-a700_94 px-14 py-16 opacity-0.64 md:w-full md:p-5">
          <div className="flex flex-col items-center gap-4">
            <div className="h-[54px] w-[50%] rounded-[20px] bg-grey_100" />
            <div className="flex flex-col gap-2 self-stretch">
              <div className="mx-[-70px] h-[22px] rounded-[10px] bg-grey_100 md:mx-0" />
              <div className="h-[22px] rounded-[10px] bg-grey_100" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
              <Img src="images/img_frame_2.svg" alt="Image" className="h-[60px]" />
            </div>
            <div className="flex justify-end">
              <div className="h-[12px] w-[36%] rounded-md bg-grey_100" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[40px] rounded-md bg-grey_100" />
            <div className="h-[40px] rounded-md bg-grey_100" />
          </div>
        </div>
      </div>
    </>
  );
}
