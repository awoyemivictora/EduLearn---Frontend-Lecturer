import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Header from "../../components/Header";
import ReactTable from "../../components/ReactTable";
import Sidebar15 from "../../components/Sidebar15";
import UserCoursesProgress from "../../components/UserCoursesProgress";
import UserProfile from "../../components/UserProfile";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  {
    coursesin: "images/img_frame_1.svg",
    hourslearning: "images/img_frame_313770.png",
    coursesInProgressText: "Courses in progress",
    coursesCountText: "22",
    actionButton: "7%",
    arrowbigdown: "images/img_arrowbigdown.svg",
  },
  {
    coursesin: "images/img_frame_1.svg",
    hourslearning: "images/img_frame_313770.png",
    coursesInProgressText: "Courses in progress",
    coursesCountText: "22",
    actionButton: "7%",
    arrowbigdown: "images/img_arrowbigdown.svg",
  },
  {
    coursesin: "images/img_frame_1.svg",
    hourslearning: "images/img_frame_313770.png",
    coursesInProgressText: "Courses in progress",
    coursesCountText: "22",
    actionButton: "7%",
    arrowbigdown: "images/img_arrowbigdown.svg",
  },
  {
    coursesin: "images/img_frame_1.svg",
    hourslearning: "images/img_frame_313770.png",
    coursesInProgressText: "Courses in progress",
    coursesCountText: "22",
    actionButton: "7%",
    arrowbigdown: "images/img_arrowbigdown.svg",
  },
];

const tableData = [
  {
    rowcoursename: "Applied mathematicts",
    rowlecturer: "Awoyemi Victor",
    rowprogress: "13%",
    rowstatus: "In Progress",
  },
  {
    rowcoursename: "Applied mathematicts",
    rowlecturer: "Young john",
    rowprogress: "100%",
    rowstatus: "Completed",
  },
  {
    rowcoursename: "Applied mathematicts",
    rowlecturer: "Tobi Emmanuel",
    rowprogress: "100%",
    rowstatus: "Completed",
  },
  {
    rowcoursename: "Applied mathematicts",
    rowlecturer: "Kayode David",
    rowprogress: "13%",
    rowstatus: "In Progress",
  },
];

export default function HomeOne() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowcoursename", {
        cell: (info) => (
          <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              {info.getValue()}
            </Heading>
            <Heading as="p">Jan 17, 2023</Heading>
          </div>
        ),
        header: () => (
          <div className="flex flex-1">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              Course name
            </Heading>
          </div>
        ),
        meta: { width: "238px" },
      }),
      tableColumnHelper.accessor("rowlecturer", {
        cell: (info) => (
          <div className="flex flex-1 md:self-stretch md:p-5">
            <div className="flex w-[58%] gap-1 md:w-full">
              <Img
                src="images/img_ellipse_1_34x34.png"
                alt="Image"
                className="h-[34px] w-[34px] rounded-[16px] object-cover"
              />
              <div className="flex flex-1 flex-col items-start">
                <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                  {info.getValue()}
                </Heading>
                <Heading as="p">Professor</Heading>
              </div>
            </div>
          </div>
        ),
        header: () => (
          <div className="flex flex-1">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              Lecturer
            </Heading>
          </div>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("rowprogress", {
        cell: (info) => (
          <div className="flex flex-1 items-center md:self-stretch md:p-5">
            <div className="relative h-[10px] w-[48%] rounded-[5px] bg-foundation-primary_color-p50-0">
              <div
                style={{ width: "39%" }}
                className="absolute h-full rounded-[5px] bg-foundation-primary_color-p300"
              />
            </div>
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: () => (
          <div className="flex flex-1">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              Progress
            </Heading>
          </div>
        ),
        meta: { width: "266px" },
      }),
      tableColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5 md:p-5">
            <div className="flex w-[64%] items-center justify-center gap-1 rounded-[5px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-1.5">
              <div className="h-[10px] w-[10px] rounded-[5px] bg-yellow-800" />
              <Heading size="text3xl" as="p" className="!font-normal !text-blue_gray-700">
                {info.getValue()}
              </Heading>
            </div>
            <Img
              src="images/img_chevronleft.svg"
              alt="Arrowright"
              className="mr-4 h-[12px] w-[12px]"
            />
          </div>
        ),
        header: () => (
          <div className="flex">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              Status
            </Heading>
          </div>
        ),
        meta: { width: "172px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="mb-[42px] flex items-start">
          <Sidebar15 />
          <div className="flex flex-1 flex-col gap-6 self-center">
            <Header />
            <div className="ml-4 mr-[34px] flex flex-col gap-3.5 md:mx-0">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-5">
                  <Heading size="subtitle_text_2_bold" as="h1" className="!text-grey_300">
                    Overview
                  </Heading>
                  <a href="https://www.youtube.com/embed/vp8fVkoZZl7" target="_blank" rel="noreferrer">
                    <Button
                      color="teal_500_11"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_lock_foundation_primary_color_p300.svg"
                          alt="Lock"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      rightIcon={
                        <Img
                          src="images/img_arrow_right_foundation_primary_color_p300.svg"
                          alt="Arrow Right"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      className="min-w-[186px] gap-1 border border-solid border-foundation-primary_color-p300 font-medium"
                    >
                      Setup student profile
                    </Button>
                  </a>
                </div>
                <div className="flex gap-3.5 md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <UserCoursesProgress {...d} key={`listcoursesin${index}`} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <div className="flex gap-3.5 md:flex-col">
                <div className="flex flex-1 flex-col gap-8 rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:self-stretch md:p-5">
                  <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                    <div className="flex flex-1 items-center">
                      <Img
                        src="images/img_frame_313848.svg"
                        alt="Circleimage"
                        className="h-[42px] w-[42px] rounded-[50%]"
                      />
                      <Heading size="text3xl" as="h2" className="!text-blue_gray-700">
                        Study Statistics
                      </Heading>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    shape="round"
                    leftIcon={<Img src="images/img_filter.svg" alt="Filter" className="h-[12px] w-[12px]" />}
                    className="min-w-[70px] gap-1 border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs"
                  >
                    Filter
                  </Button>
                </div>
                <div className="mx-4 mb-4 md:mx-0">
                  <div className="relative h-[204px] md:h-auto">
                    <div className="flex flex-1 flex-col items-end">
                      <div className="flex items-center justify-center gap-2 self-stretch md:flex-col">
                        <Heading size="label_bold" as="h3" className="!text-blue_gray-300_01">
                          30%
                        </Heading>
                        <div className="mb-1 h-px flex-1 rotate-[90deg] self-end bg-blue_gray-50_01 md:self-stretch sm:self-auto" />
                      </div>
                      <div className="relative mt-[-6px] flex flex-col items-center rounded-tl rounded-tr bg-foundation-primary_color-p300 p-1 md:mr-0">
                        <Text size="textxs" as="p" className="mb-[178px] !font-lexenddeca">
                          30%
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0.83px] left-0 right-0 m-auto flex flex-1 items-center">
                    <div className="flex items-end">
                      <div className="flex flex-col items-end gap-5 self-start">
                        <Heading size="label_bold" as="h4" className="!text-blue_gray-300_01">
                          25%
                        </Heading>
                        <Heading size="label_bold" as="h5" className="!text-blue_gray-300_01">
                          20%
                        </Heading>
                        <Heading size="label_bold" as="h6" className="!text-blue_gray-300_01">
                          15%
                        </Heading>
                        <Heading size="label_bold" as="p" className="!text-blue_gray-300_01">
                          10%
                        </Heading>
                        <Heading size="label_bold" as="p" className="!text-blue_gray-300_01">
                          5%
                        </Heading>
                      </div>
                      <div className="ml-10 flex flex-col items-center rounded-tl rounded-tr bg-foundation-primary_color-p50-0 p-1">
                        <Text size="textxs" as="p" className="mb-[106px] !font-lexenddeca">
                          20%
                        </Text>
                      </div>
                      <Button
                        color="foundation_primary_color_p50_0"
                        size="2xl"
                        className="ml-12 min-w-[28px] rounded-tl rounded-tr font-lexenddeca"
                      >
                        10%
                      </Button>
                      <div className="ml-[-50px] mt-1 flex flex-col items-center rounded-tl rounded-tr bg-foundation-primary_color-p50-0 p-1">
                        <Text size="textxs" as="p" className="mb-36 !font-lexenddeca">
                          25%
                        </Text>
                      </div>
                      <Button
                        color="foundation_primary_color_p50_0"
                        size="3xl"
                        className="min-w-[28px] self-end rounded-tl rounded-tr font-lexenddeca"
                      >
                        15%
                      </Button>
                      <div className="absolute bottom-[1.00px] left-0 right-0 m-auto flex flex-1 items-center justify-end gap-12">
                        <div className="flex flex-col items-center rounded-tl rounded-tr bg-foundation-primary_color-p50-0 p-1">
                          <Text size="textxs" as="p" className="mb-[154px] !font-lexenddeca">
                            25%
                          </Text>
                        </div>
                        <Text
                          size="textxs"
                          as="p"
                          className="self-end rounded-tl rounded-tr bg-foundation-primary_color-p50-0 pb-4 pl-1.5 pr-2.5 pt-1 !font-lexenddeca"
                        >
                          5%
                        </Text>
                      </div>
                      <div className="relative z-[1] ml-3.5 mt-[-4px] flex items-center justify-center gap-2 md:ml-0 md:flex-col">
                        <Heading size="label_bold" as="p" className="!text-blue_gray-300_01">
                          0
                        </Heading>
                        <div className="mb-1 h-px flex-1 rotate-[90deg] self-end bg-blue_gray-50_01 md:self-stretch sm:self-auto" />
                      </div>
                      <div className="relative mx-3 mt-[-2px] flex flex-wrap justify-center gap-[38px] md:mx-0">
                        <Text as="p">Sunday</Text>
                        <Text as="p">Monday</Text>
                        <Text as="p">Tuesday</Text>
                        <Text as="p">Wednesday</Text>
                        <Text as="p">Thursday</Text>
                        <Text as="p">Friday</Text>
                        <Text as="p">Saturday</Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col gap-[30px] rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:w-full md:p-5">
                  <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                    <div className="flex flex-1 items-center">
                      <Img
                        src="images/img_frame_2_foundation__primary_color_p50_1.svg"
                        alt="Circleimage"
                        className="h-[42px] w-[42px] rounded-[50%]"
                      />
                      <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                        Study Progress
                      </Heading>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    shape="round"
                    className="min-w-[64px] border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs"
                  >
                    Details
                  </Button>
                </div>
                <div className="mx-4 mb-9 flex flex-col items-center gap-[30px] md:mx-0">
                  <div className="relative h-[124px] w-[44%] md:h-auto">
                    <CircularProgressbar
                      strokeWidth={7}
                      value={42}
                      styles={{
                        trail: { stroke: "#e7f5f2" },
                        path: {
                          strokeLinecap: "square",
                          transformOrigin: "center",
                          transform: "rotate(15deg)",
                        },
                      }}
                      className="h-[124px] flex-1"
                    />
                    <Heading
                      size="text3xl"
                      as="p"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !text-blue_gray-700"
                    >
                      24%
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-3 self-stretch md:flex-row sm:flex-col">
                    <UserProfile />
                    <UserProfile activeCoursesText="Inactive courses" percentageText="76%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
              <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                <div className="flex flex-1 items-center">
                  <Img
                    src="images/img_frame_2_foundation_primary_color_p50_1.svg"
                    alt="Circleimage"
                    className="h-[42px] w-[42px] rounded-[50%]"
                  />
                  <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                    Courses
                  </Heading>
                </div>
                <Button
                  size="sm"
                  shape="round"
                  leftIcon={<Img src="images/img_filter.svg" alt="Filter" className="h-[12px] w-[12px]" />}
                  className="min-w-[70px] gap-1 border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs"
                >
                  Filter
                </Button>
              </div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "bg-gray-50 rounded-lg" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="sm:whitespace-no-wrap mx-4 mb-[52px] md:mx-0 sm:block sm:overflow-x-auto"
                columns={tableColumns}
                data={tableData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
