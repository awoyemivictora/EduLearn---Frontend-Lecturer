import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import ClassSchedule from "../../components/ClassSchedule";
import InfoPanel from "../../components/InfoPanel";
import AvatarImages from "../../components/AvatarImages";
import CoursePercentage from "../../components/CoursePercentage";
import AttendanceHeader from "../../components/AttendanceHeader";
import SelectBox from "../../components/SelectBox";
import React, { Suspense, useState, useEffect } from "react";
import {
    DotsThree,
    CaretDown,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { fetchRandomImage } from "../../unsplashService.js";
import { faker } from "@faker-js/faker";
import ReactTableAttendance from "../../components/ReactTableAttendance";

const dropDownOptions = [
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
];

const tableData = [
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
  {
    sn: "1",
    date: "Aug 12, 2024",
    department: "Banking and finance",
    level: "200",
    rowtotal: "580",
  },
];

export default function Attendance() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("sn", {
        cell: (info) => (
          <Text
            as="p"
            className="px-[34px] text-[13px] font-normal text-secondary_300-1 sm:px-5"
          >
            {info.getValue()}
          </Text>
        ),
        header: (info) => (
          <Heading
            size="body_text_bold"
            as="h3"
            className="px-[34px] py-3.5 text-left text-[13px] font-bold text-secondary_300-1 sm:px-5"
          >
            S/N
          </Heading>
        ),
        meta: { width: "138px" },
      }),

      tableColumnHelper.accessor("date", {
        cell: (info) => (
            <Text
              as="p"
              className="text-[13px] font-normal text-secondary_300-1"
            >
              {info.getValue()}
            </Text>
          ),
          
        header: (info) => (
          <Heading
            size="body_textt_bold"
            as="h4"
            className="py-3.5 pl-1.5 text-left text-[13px] font-bold text-secondary_300-1"
          >
            Date
          </Heading>
        ),
        meta: { width: "174px" },
      }),

      tableColumnHelper.accessor("department", {
        cell: (info) => (
          <Text as="p" className="text-[13px] font-normal text-secondary_300-1">
            {info.getValue()}
          </Text>
        ),
        header: (info) => (
          <Heading
            size="body_text_bold"
            as="h5"
            className="py-3.5 pl-1.5 text-left text-[13px] font-bold text-secondary_300-1"
          >
            Department
          </Heading>
        ),
        meta: { width: "180px" },
      }),

      tableColumnHelper.accessor("level", {
        cell: (info) => (
          <Text as="p" className="text-[13px] font-normal text-secondary_300-1">
            {info.getValue()}
          </Text>
        ),
        header: (info) => (
          <Heading
            size="body_text_bold"
            as="h6"
            className="py-3.5 pl-1.5 text-left text-[13px] font-bold text-secondary_300-1"
          >
            Level
          </Heading>
        ),
        meta: { width: "160px" },
      }),

      tableColumnHelper.accessor("rowtotal", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5">
            <Text
              as="p"
              className="text-[13px] font-normal text-secondary_300-1"
            >
              {info.getValue()}
            </Text>

            <div className="mr-16 flex gap-1 p-2.5">
              
            <Link to="/attendance"><DotsThree size={18} /></Link>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap justify-between gap-5 px-1.5 py-3.5">
            <Heading
              size="body_text_bold"
              as="p"
              className="text-[13px] font-bold text-secondary_300-1"
            >
              Total
            </Heading>
            <Heading
              size="body_text_bold"
              as="p"
              className="mr-[62px] text-[13px] font-bold text-secondary_300-1 md:mr-0"
            >
              Action
            </Heading>
          </div>
        ),
        meta: { width: "294px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Lecturer Attendance</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full bg-gray-50_02">
        <div className="flex items-start">
          <SidebarMenu />

          <div className="flex flex-1 flex-col gap-[30px]">
            <Header />

            <div className="ml-6 mr-[30px] flex flex-col gap-8 md:mx-0">
              <AttendanceHeader />

              <div className="flex flex-col gap-3.5 rounded-[5px] border border-solid border-blue_gray-50_01 bg-foundation-primary_color-p50-1">
                <ReactTableAttendance
                  size="xs"
                  variant="simple"
                  bodyProps={{ className: "" }}
                  headerCellProps={{ className: "bg-foundation-primary_color-p300" }}
                  rowDataProps={{ className: "bg-foundation-primary_color-p50-1" }}
                  cellProps={{className: "border-blue_gray-50_01 border-b border-solid" }}
                  className="sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                  columns={tableColumns}
                  data={tableData}
                />

                <div className="mb-[26px] ml-[38px] mr-1 flex justify-between gap-5 md:mx-0 md:flex-col">
                  <div className="flex flex-1 items-center justify-center md:self-strettch md:px-5">
                    <Heading
                      size="small_text"
                      as="p"
                      className="font-dmsans text-[12.8px] font-medium text-secondary_300-1"
                    >
                      Showing
                    </Heading>
                    <div className="flex flex-1 items-center gap-[2px] px-1">
                      <SelectBox
                        color="gray_50"
                        size="xs"
                        shape="round"
                        indicator={
                            <CaretDown size={12} />
                        }
                        name="arrowdown"
                        placeholder={`10`}
                        options={dropDownOptions}
                        className="w-[14%] gap-2 rounded-[5px] border border-solid border-grayy-300_01 px-3 font-dmsans font-medium"
                      />
                      <Heading
                        size="small_text"
                        as="p"
                        className="font-dmsans text-[12.8px] font-medium text-secondary_300-1"
                      >
                        10 out of 100
                      </Heading>
                    </div>
                  </div>

                  <div className="flex gap-[9px] md:px-5">
                    <Button
                      color="gray_300_01"
                      size="sm"
                      variant="outline"
                      shape="round"
                      className="min-w-[50px] rounded-[5px] !border px-[11px] font-dmsans font-medium text-foundation-primary_color-p300 hover:bg-foundation-primary_color-p300 hover:text-foundation-primary_color-p50-1"
                    >
                      Prev
                    </Button>
                    <Button
                      color="foundation__primary_color_p300"
                      size="sm"
                      shape="round"
                      className="min-w-[28px] rounded-[5px] px-3 font-dmsans font-medium bg-foundation-primary_color-p300 text-foundation-primary_color-p50-1"
                    >
                      1
                    </Button>
                    <Button
                      color="gray_300_01"
                      size="sm"
                      variant="outline"
                      shape="round"
                      className="min-w-[52px] !border px-[11px] font-dmsans font-medium text-foundation-primary_color-p300 hover:bg-foundation-primary_color-p300 hover:text-foundation-primary_color-p50-1"
                    >
                      Next
                    </Button>
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
