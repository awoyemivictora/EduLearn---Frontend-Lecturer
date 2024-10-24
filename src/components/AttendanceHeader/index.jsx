import { Button, Img, Heading } from "../../components";
import React from "react";

export default function AttendanceHeader() {
  return (
    <div className="flex items-center justify-between gap-5 sm:flex-col">
      <div className="flex flex-1 flex-col items-start gap-0.5 sm:self-stretch sm:px-5">
        <Heading
          size="subtitle_text_2_bold"
          as="h1"
          className="text-[19px] font-bold text-grey_300"
        >
          Manage Class Attendance
        </Heading>
        <Heading as="h2" className="text-[13px] font-medium text-grey_200">
          Easily track and manage student attendance for each class session
        </Heading>
      </div>
      <div className="flex items-center gap-2.5 sm:px-5">
        <Button
          shape="round"
          leftIcon={
            <Img
              src="images/img_filter.svg"
              alt="Filter"
              className="h-[12px] w-[12px]"
            />
          }
          className="min-w-[70px] gap-1 rounded-md border border-solid border-gray-300_01 px-[11px] font-medium"
        >
          Filter
        </Button>
        <Button
          className="request_for_border min-w-[82px] rounded-md px-[21px] font-medium text-foundation-primary_color-p50-1 shadow-lg sm:px-5"
          color="foundation__primary_color_p300"
          size="md"
          shape="round"
          variant={null}
        >
          Export
        </Button>
      </div>
    </div>
  );
}
