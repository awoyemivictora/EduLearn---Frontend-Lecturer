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
import React, { Suspense, useState, useEffect } from "react";
import {
  CaretRight,
  UserCircle,
  VideoCamera,
  Users,
  Clock,
  Calendar,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { fetchRandomImage } from "../../unsplashService.js";
import { faker } from "@faker-js/faker";

const data = [
  {
    titleText: "GST 101",
    descriptionText:
      "Lorem ipsum doolor sit amet consectetur. Placerat neque pharetra.",
    todayButtonText: "Today",
    dateText: "Aug 19, 2024",
  },
  {
    titleText: "GST 101",
    descriptionText:
      "Lorem ipsum doolor sit amet consectetur. Placerat neque pharetra.",
    todayButtonText: "Today",
    dateText: "Aug 19, 2024",
  },
  {
    titleText: "GST 101",
    descriptionText:
      "Lorem ipsum doolor sit amet consectetur. Placerat neque pharetra.",
    todayButtonText: "Today",
    dateText: "Aug 19, 2024",
  },
  {
    titleText: "GST 101",
    descriptionText:
      "Lorem ipsum doolor sit amet consectetur. Placerat neque pharetra.",
    todayButtonText: "Today",
    dateText: "Aug 19, 2024",
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
        <div className="flex items-start">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-6">
            <Header />
            <div className="ml-4 mr-[34px] md:mx-0">
              <div>
                <div className="flex items-start justify-center">
                  <div className="mt-2 flex flex-1 flex-col items-start gap-0.5 self-end">
                    <Heading
                      size="subtitle_text_2_bold"
                      as="h1"
                      className="text-[19px] font-bold text-grey_300"
                    >
                      Overview
                    </Heading>
                    <Heading
                      as="h2"
                      className="text-[13px] font-medium text-grey_200"
                    >
                      Aug 19th, 2024
                    </Heading>
                  </div>
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

                <div className="mt-1 flex justify-end gap-[9px]">
                  <Button
                    shape="round"
                    leftIcon={<VideoCamera size={18} />}
                    className="min-w-[158px] gap-1 rounded-md text-gray-800 border border-solid border-gray-300_01 px-[11px] font-medium"
                  >
                    Scheduule Live Class
                  </Button>
                  <Button
                    shape="round"
                    leftIcon={<Users size={18} />}
                    className="min-w-[154px] gap-1 rounded-md text-gray-800 border border-solid border-gray-300_01 px-[11px] font-medium"
                  >
                    Create group forum
                  </Button>
                </div>

                <div className="mt-3.5">
                  <div className="flex gap-4 md:flex-col">
                    <div className="flex w-full flex-col gap-4 md:px-5">
                      <div>
                        <div className="flex flex-col gap-2.5 rounded-lg border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                          <div className="flex flex-wrap justify-between gap-5 bg-gray-50 p-3">
                            <Heading
                              size="text4xl"
                              as="h3"
                              className="text-[14px] font-medium text-blue_gray-700"
                            >
                              Live lectures today
                            </Heading>
                            <Heading
                              size="text4xl"
                              as="h4"
                              className="text-[14px] font-medium text-blue_gray-700"
                            >
                              2
                            </Heading>
                          </div>
                          <div className="mx-3 mb-2.5 flex flex-col gap-3 md:mx-0">
                            <ClassSchedule className="border-b border-solid border-blue_gray-50_01" />
                            <ClassSchedule
                              classTitle="SOC 102 with Pol sci 100 level"
                              classTime="8:00 - 8:45 AM "
                              meetingPlatform="On google meet"
                              confirmationButton="Pending"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-col gap-2.5 rounded-lg border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                          <div className="flex bg-gray-50 p-3">
                            <Heading
                              size="text4xl"
                              as="h5"
                              className="text-[14px] font-medium text-blue_gray-700"
                            >
                              Pending assignments
                            </Heading>
                          </div>
                          <div className="mx-3 flex items-center gap-2 md:mx-0">
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[12px] font-medium text-blue_gray-700"
                            >
                              Maths 204
                            </Text>
                            <Button
                              color="orange_50"
                              size="xs"
                              leftIcon={<Clock size={12} />}
                              className="min-w-[92px] gap-1 rounded-[10px] px-2.5 bg-[#FBEED5] text-[#EEAD33] border-[#F7D79C]"
                            >
                              In Progress
                            </Button>
                          </div>

                          <div className="ml-3 mr-4 flex flex-col items-start gap-1.5 md:mx-0">
                            <Heading
                              size="textlg"
                              as="h6"
                              className="text-[10px] font-normal text-grey_200"
                            >
                              Description
                            </Heading>
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[12px] font-medium text-blue_gray-700"
                            >
                              Lorem ipsum dolor sit amet consectetur. Vulputate.
                            </Text>
                          </div>

                          <div className="mx-3 flex justify-center md:mx-0">
                            <div className="flex flex-col items-start gap-1.5">
                              <Heading
                                size="textlg"
                                as="p"
                                className="text-[10px] font-normal text-grey_200"
                              >
                                Department{" "}
                              </Heading>
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[12px] font-medium text-blue_gray-700"
                              >
                                Banking & Finance
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-1 px-[30px] sm:px-5">
                              <Heading
                                size="textlg"
                                as="p"
                                className="text-[10px] font-normal text-grey_200"
                              >
                                Level
                              </Heading>
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[12px] font-medium text-blue_gray-700"
                              >
                                200
                              </Text>
                            </div>
                          </div>

                          <div className="mb-3 ml-3 mr-4 flex flex-col items-start gap-1.5 md:mx-0">
                            <Heading
                              size="textlg"
                              as="p"
                              className="text-[10px] font-normal text-grey_200"
                            >
                              Timeline
                            </Heading>
                            <div className="flex self-stretch">
                              <Calendar size={12} />
                              <Text
                                size="label"
                                as="p"
                                className="text-[11px] font-normal text-grey_200"
                              >
                                Aug 19, 2024 - Aug 24, 2024
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:px-5">
                      <div className="rounded-lg border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                        <div className="mb-1 flex flex-col gap-6">
                          <div className="flex bg-gray-50 p-3">
                            <Heading
                              size="text4xl"
                              as="p"
                              className="text-[14px] font-medium text-blue_gray-700"
                            >
                              Course analysis
                            </Heading>
                          </div>

                          <div className="mx-3.5 flex itetms-center md:mx-0">
                            <div className="mb-1.5 flex flex-1 flex-col items-startt gap-0.5 self-end">
                              <Heading
                                size="textxl"
                                as="p"
                                className="text-[11.22px] font-medium text-blue_gray-700"
                              >
                                12 courses
                              </Heading>
                              <Text
                                size="texts"
                                as="p"
                                className="text=[8.81px] font-normal text-grey_200"
                              >
                                Completed
                              </Text>
                              <div className="flex items-center gap-[11px] self-stretch">
                                <AvatarImages />
                                <Text
                                  size="texts"
                                  as="p"
                                  className="text-[8.81px] font-normal text-grey_200"
                                >
                                  600 attended
                                </Text>
                              </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="ml-auto flex items-end h-full gap-2">
                              <div className="h-24 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
                              <div className="h-16 w-3 bg-[#0D9F7E] rounded-t"></div>
                              <div className="h-8 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
                              <div className="h-20 w-3 bg-[#0D9F7E] mx-1 rounded-t"></div>
                              <div className="h-12 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-8 rounded-lg border border-solid border-grey_100 bg-foundation-primary_color-p50-1">
                        <div className="flex bg-gray-50 p-3">
                          <Heading
                            size="text4xl"
                            as="p"
                            className="text-[14px] font-medium text-blue_gray-700"
                          >
                            Attendance summary
                          </Heading>
                        </div>
                        <div className="mb-[18px] ml-4 mr-3 flex flex-col items-center gap-[30px] md:mx-0">
                          <div className="relative h-[124px] w-[44%] content-center md:h-auto">
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
                              size="text4xl"
                              as="p"
                              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[14px] font-medium text-blue_gray-700"
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

                    <div className="flex w-full flex-col gap-3 rounded-lg border border-solid border-grey_100 bg-foundation-primary_coolor-p50-1 md:px-5">
                      <div className="flex bg-gray-50 p-3">
                        <Heading
                          size="text4xl"
                          as="p"
                          className="text-[14px] font-medium text-blue_gray-700"
                        >
                          Upcoming classes
                        </Heading>
                      </div>

                      <div className="mx-3 mb-[38px] flex flex-col gap-4 md:mx-0">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <InfoPanel
                              {...d}
                              key={"listgstcounter" + index}
                              className="border-b border-solid border-blue_gray-50_01"
                              buttonText={
                                index % 2 === 0 ? "Today" : "Tomorrow"
                              }
                            />
                          ))}
                        </Suspense>
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
