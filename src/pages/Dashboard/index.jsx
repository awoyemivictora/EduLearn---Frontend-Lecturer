import ReactTable from "../../components/ReactTable";

import DashboardCards from "../../components/DashboardCards";
import UserProfile from "../../components/UserProfile";
import { createColumnHelper } from "@tanstack/react-table";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, CoursePercentage } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState, useEffect } from "react";
import {
  CaretRight,
  UserCircle,
  Bookmarks,
  Student,
  BookOpen,
  Funnel,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { fetchRandomImage } from "../../unsplashService.js";
import { faker } from "@faker-js/faker";

const data = [
  {
    coursesInProgressText: "Courses in progress",
    coursesCountText: "22",
    actionButton: "7%",
  },
  {
    coursesInProgressText: "images/img_frame_1.svg",
    coursesCountText: "images/img_frame_313770.png",
    actionButton: "Courses in progress",
  },
  {
    coursesInProgressText: "images/img_frame_1.svg",
    coursesCountText: "images/img_frame_313770.png",
    actionButton: "Courses in progress",
  },
];

const tableData = [
  {
    rowcoursename: "Applied mathematics",
    rowlecturer: "Awoyemi Victor",
    rowprogress: "13%",
    rowstatus: "In Progress",
  },
  {
    rowcoursename: "Applied mathematics",
    rowlecturer: "Young John",
    rowprogress: "100%",
    rowstatus: "Completed",
  },
  {
    rowcoursename: "Applied mathematics",
    rowlecturer: "Tobi Emmanuel",
    rowprogress: "100%",
    rowstatus: "Completed",
  },
  {
    rowcoursename: "Applied mathematics",
    rowlecturer: "Kayode David",
    rowprogress: "13%",
    rowstatus: "In Progress",
  },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Discussion Forum");
  const [showPopUp, setShowPopUp] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/victor.jpg";
  const [coursePercentageA, setCoursePercentageA] = useState("0%");
  const [coursePercentageB, setCoursePercentageB] = useState("0%");
  const [progressPercentage, setProgressPercentage] = useState("79%"); // Default progress percentage

  // Function to show the popup
  const handlePopUp = () => {
    setShowPopUp(true);
  };

  // Function to update the active button
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    // Function to generate random percentages for active and inactive courses
    const generateRandomCoursePercentages = () => {
      const randomCoursePercentageA = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100
      const randomCoursePercentageB = 100 - randomCoursePercentageA; // Complement to 100

      // Setting theh states
      setCoursePercentageA(`${randomCoursePercentageA}%`);
      setCoursePercentageB(`${randomCoursePercentageB}%`);
    };
    generateRandomCoursePercentages(); // Call the function when the component mounts

    // Generate a random percentage between 1 and 100
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    setProgressPercentage(`${randomPercentage}`);

    // Generate a random image by fetching from Unsplash and if null, it defaults to my image
    const loadRandomImage = async () => {
      try {
        const imageUrl = await fetchRandomImage();
        // Chheck if imageUrl is null, undefined or if it has an error
        setAvatarUrl(imageUrl || defaultImageUrl);
      } catch (error) {
        // If thehre's an error, fall back to the default image
        console.error("Failed to fetch image:", error);
        setAvatarUrl(defaultImageUrl);
      }
    };
    loadRandomImage();
  }, []); // Empty dependency array means it runds only once

  // Function to generate random dates in the future to submit the assignments
  function getRandomFutureDate(yearsIntoFuture = 1) {
    const today = new Date();
    const futureYear =
      today.getFullYear() + Math.floor(Math.random() * yearsIntoFuture);
    const futureMonth = Math.floor(Math.random() * 12);
    const futureDay = Math.floor(Math.random() * 28); // Safe for all montths
    return new Date(futureYear, futureMonth, futureDay);
  }

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowcoursename", {
        cell: (info) => (
          <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              {info?.getValue?.()}
            </Heading>
            <Heading as="p">
              {getRandomFutureDate(2).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short", // Abbereviated month (e.g., Jan, Feb)
                day: "numeric", // Day of the month
              })}
            </Heading>
          </div>
        ),
        header: (info) => (
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
                src={avatarUrl}
                alt="Image"
                className="h-[34px] w-[34px] rounded-[16px] object-cover"
              />
              <div className="flex flex-1 flex-col items-start">
                <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                  {/* {info?.getValue?.()} */}
                  {faker.person.fullName()}
                </Heading>
                <Heading as="p">Professor</Heading>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
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
                style={{ width: coursePercentageA }} // To be checked
                className="absolute h-full rounded-[5px] bg-foundation-primary_color-p300"
              />
            </div>
            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
              {coursePercentageA}
            </Heading>
          </div>
        ),
        header: (info) => (
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
              <Heading
                size="text3xl"
                as="p"
                className="!font-normal !text-blue_gray-700"
              >
                {info.getValue()}
              </Heading>
            </div>

            <Link to={`/academic-program-courses`}>
              <CaretRight size={12} className="cursor-pointer" />
            </Link>
          </div>
        ),
        header: (info) => (
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
        <meta name="description" content="Website created using vite" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="mb-[60px] flex items-start">
          <SidebarMenu />

          <div className="flex flex-1 flex-col gap-6 self-center">
            <Header />

            <div className="ml-4 mr-[34px] flex flex-col gap-3.5 md:mx-0">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-5">
                    <Heading
                      size="subtitle_text_2_bold"
                      as="h1"
                      className="!text-grey_300"
                    >
                      Overview
                    </Heading>
                    <a href="/student-profile" target="_blank">
                      <Button
                        color="teal_500_11"
                        shape="round"
                        leftIcon={<UserCircle size={18} />}
                        rightIcon={<CaretRight size={18} />}
                        className="min-w-[186px] gap-1 border border-solid border-foundation-primary_color-p300 !text-foundation-primary_color-p300 font-medium"
                        style={{ backgroundColor: "#E7F5F2" }}
                      >
                        Setup student profile
                      </Button>
                    </a>
                  </div>
                </div>

                {/* ========================== DASHBOARD CARDS (RIGHT SIDEBAR)=======================================*/}
                <div className="flex gap-3.5 md:flex-col">
                  <div className="flex flex-1 flex-col gap-3.5 rounded-[12px] bg-foundation-primary_color-p50-1 md:self-stretch md:p-5 ">
                    <div className="flex gap-3.5 flex-col w-full">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        <DashboardCards
                          coursesInProgressText="Courses in progress"
                          coursesCountText="22"
                          actionButton="7%"
                          className="w-full "
                        />
                      </Suspense>
                    </div>
                  </div>
                  
        

                  <div className="flex w-[28.5%] flex-col gap-[30px] rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:w-full p-5">
                    {/* Header Section */}
                    <div className="flex items-center justify-center border-b border-solid border-grey_100 pb-2 md:p-4">
                      <div className="flex flex-1 items-center">
                        <div className="w-8 h-8 mr-4 rounded-full bg-foundation-primary_color-p300 flex items-center justify-center">
                          <Bookmarks
                            size={12}
                            className="h-[20px] w-[20px] text-foundation-primary_color-p50-0 rounded-[50%]"
                          />
                        </div>

                        <Heading
                          size="text3xl"
                          as="p"
                          className="!text-blue_gray-700 text-lg md:text-2xl"
                        >
                          Hours learning
                        </Heading>
                      </div>

                      <Button
                        size="sm"
                        shape="round"
                        className="min-w-[64px] border border-solid border-gray-300_02 font-medium text-grey_300 shadow-xs text-xs md:text-sm"
                      >
                        Details
                      </Button>
                    </div>

                    {/* Hours learning bars (Active, Pause & Extra time) */}
                    <div className="w-full flex-col gap-[30px] rounded-[12px] bg-foundation-primary_color-p50-1 md:p-5">
                      {/* Total Time Section */}
                      <div className="text-left md:text-left">
                        <p className="text-xs font-semibold text-gray-800">
                          12 hours 27 minutes in total{" "}
                          <span className="ml-1">⏳</span>
                        </p>
                      </div>

                      {/* Progress Bars Section */}
                      <div className="mt-4 flex items-center w-full gap-2">
                        {/* Active time bar */}
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ flexGrow: parseInt(coursePercentageA) }}
                        ></div>

                        {/* Pause time bar */}
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ flexGrow: parseInt(coursePercentageB) }}
                        ></div>

                        {/* Extra time bar */}
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ flexGrow: parseInt(coursePercentageA) }}
                        ></div>
                      </div>

                      {/* Labels Section */}
                      <div className="mt-3 flex justify-between items-center">
                        {/* Active time */}
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                          <p className="text-xs font-medium text-gray-700">
                            Active time
                          </p>
                        </div>

                        {/* Pause time */}
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                          <p className="text-xs font-medium text-gray-700">
                            Pause time
                          </p>
                        </div>

                        {/* Extra time */}
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                          <p className="text-xs font-medium text-gray-700">
                            Extra time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ========================== STUDY PROGRESS =======================================*/}
                <div className="flex gap-3.5 md:flex-col">
                  <div className="flex flex-1 flex-col gap-8 rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:self-stretch md:p-5">
                    <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                      <div className="flex flex-1 items-center">
                        <div className="w-8 h-8 mr-4 rounded-full bg-foundation-primary_color-p300 flex items-center justify-center">
                          <BookOpen
                            size={12}
                            className="h-[20px] w-[20px] text-foundation-primary_color-p50-0 rounded-[50%]"
                          />
                        </div>
                        <Heading
                          size="text3xl"
                          as="h2"
                          className="!text-blue_gray-700"
                        >
                          Study Statistics
                        </Heading>
                      </div>

                      <Button
                        size="sm"
                        shape="round"
                        leftIcon={<Funnel size={12} />}
                        className="min-w-[70px] gap-1 border border-soolid border-gray-300_02 font-medium text-grey_200 shadow-xs"
                      >
                        Filter
                      </Button>
                    </div>

                    {/* Bar Chart */}
                    <div className="relative">
                      {/* Bar Chart Container */}
                      <div className="flex items-end gap-8 h-64 mx-20 mb-4">
                        {/* Bar 1 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-32 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Sunday
                          </span>
                        </div>

                        {/* Bar 2 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-40 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Monday
                          </span>
                        </div>

                        {/* Bar 3 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-24 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Tuesday
                          </span>
                        </div>

                        {/* Bar 4 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-48 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Wednesday
                          </span>
                        </div>

                        {/* Bar 5 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-28 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Thursday
                          </span>
                        </div>

                        {/* Bar 6 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-36 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Friday
                          </span>
                        </div>

                        {/* Bar 7 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-foundation-primary_color-p300 h-20 w-10 rounded-t"></div>
                          <span className="mt-2 text-sm text-gray-500">
                            Saturday
                          </span>
                        </div>
                      </div>

                      {/* Y-Axis Labels */}
                      <div className="absolute left-0 top-8 flex flex-col items-center gap-4 ml-2">
                        <span className="text-sm text-gray-500">100%</span>
                        <span className="text-sm text-gray-500">80%</span>
                        <span className="text-sm text-gray-500">60%</span>
                        <span className="text-sm text-gray-500">40%</span>
                        <span className="text-sm text-gray-500">20%</span>
                        <span className="text-sm text-gray-500">0%</span>
                      </div>
                    </div>
                  </div>

                  {/* Study Progress Section */}
                  <div className="flex w-[32%] flex-col gap-[30px] rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 md:w-full md:p-5">
                    <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                      <div className="flex flex-1 items-center">
                        <div className="w-8 h-8 mr-4 rounded-full bg-foundation-primary_color-p300 flex items-center justify-center">
                          <Bookmarks
                            size={12}
                            className="h-[20px] w-[20px] text-foundation-primary_color-p50-0 rounded-[50%]"
                          />
                        </div>

                        <Heading
                          size="text3xl"
                          as="p"
                          className="!text-blue_gray-700"
                        >
                          Study Progress
                        </Heading>
                      </div>

                      <Button
                        size="sm"
                        shape="round"
                        className="min-w-[64px] border border-soolid border-gray-300_02 font-medium text-grey_300 shadow-xs"
                      >
                        Details
                      </Button>
                    </div>

                    {/* Progress Circle */}
                    <div className="mx-4 mb-9 flex flex-col items-center gap-[30px] md:mx-0">
                      <div className="relative h-[124px] w-[44%] md:h-auto">
                        <CircularProgressbar
                          strokeWidth={7}
                          value={progressPercentage}
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
                          {`${coursePercentageA}`}
                        </Heading>
                      </div>

                      {/* Courses Info */}
                      <div className="flex flex-col gap-3 self-stretch md:flex-row sm:flex-col">
                        <CoursePercentage
                          activeCoursesText="Active courses"
                          percentageText={`${coursePercentageA}`}
                          isActive={true}
                        />
                        <CoursePercentage
                          activeCoursesText="Inactive courses"
                          percentageText={`${coursePercentageB}`}
                          isActive={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-4 rounded-[12px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                  <div className="flex items-center justify-center border-b border-solid border-grey_100 p-2">
                    <div className="flex flex-1 items-center">
                      <div className="w-8 h-8 mr-4 rounded-full bg-foundation-primary_color-p300 flex items-center justify-center">
                        <Student
                          size={12}
                          className="h-[20px] w-[20px] text-foundation-primary_color-p50-0 rounded-[50%]"
                        />
                      </div>
                      <Heading
                        size="text3xl"
                        as="p"
                        className="!text-blue_gray-700"
                      >
                        Courses
                      </Heading>
                    </div>

                    <Button
                      size="sm"
                      shape="round"
                      leftIcon={<Funnel size={12} />}
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
        </div>
      </div>
    </>
  );
}
