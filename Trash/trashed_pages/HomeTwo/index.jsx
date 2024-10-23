import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text } from "../../components";
import Header from "../../components/Header";
import MeetingSchedule from "../../components/MeetingSchedule";
import NumberRow from "../../components/NumberRow";
import Sidebar2 from "../../components/Sidebar2";
import UserProgress from "../../components/UserProgress";
import React, { Suspense } from "react";

const data = [
  {
    buttonLabel: "VC",
    meetingTitle: "Meeting with the VC",
    meetingTime: "10 A.M – 11A.M",
    meetingLink: "Meeting link//www.zoom.com Due soon",
  },
  {
    buttonLabel: "VC",
    meetingTitle: "Meeting with the VC",
    meetingTime: "10 A.M – 11A.M",
    meetingLink: "Meeting link//www.zoom.com Due soon",
  },
  {
    buttonLabel: "Ass",
    meetingTitle: "Maths Ass Due",
    meetingTime: "10 A.M – 11A.M",
    meetingLink: "Meeting link//www.zoom.com Due soon",
  },
];

const data1 = [
  { coursesInProgressText: "Courses in progress", coursesInProgressCount: "22", progressPercentageText: "+ 22%" },
  { coursesInProgressText: "Active Prototype", coursesInProgressCount: "22", progressPercentageText: "+ 25%" },
  { coursesInProgressText: "Hours Learning", coursesInProgressCount: "22h 12m", progressPercentageText: "+ 22%" },
];

const data2 = [
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
  {
    numberTwentyNine: "29",
    numberThirty: "30",
    numberOne: "1",
    numberTwo: "2",
    numberThree: "3",
    numberFour: "4",
    numberFive: "5",
  },
];


export default function HomeTwo() {
    return (
      <>
        <Helmet>
          <title>EduLearn</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="h-[1943px] w-full bg-url(/public/images/img_register.png) bg-cover bg-no-repeat md:h-auto">
          <div className="flex items-start">
            <Sidebar2 />
            <div className="flex flex-1 flex-col gap-[42px] self-center">
              <Header />
              <div className="ml-2.5 flex items-end gap-[78px] md:ml-0 md:gap-[58px] sm:gap-[39px]">
                <div className="flex items-start justify-end gap-3.5 self-stretch md:mr-0 md:flex-col">
                  <div className="flex flex-1 flex-col gap-12 md:self-stretch md:p-5">
                    <Heading size="text4xl" as="h1" className="!text-blue_gray-900_02">
                      Overview
                    </Heading>
                    <div className="flex gap-3 self-stretch md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data1.map((d, index) => (
                          <UserProgress {...d} key={`listcoursesin${index}`} className="w-[30%]" />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                  <div className="flex gap-3.5 md:flex-col">
                    <div className="flex flex-1 flex-col gap-[18px] rounded-[5px] bg-foundation-primary_color_p50_1 p-2 shadow-2xl md:self-stretch">
                      <div className="mr-2 mt-1.5 flex items-center md:mr-0">
                        <div className="flex flex-1 flex-col items-start gap-2">
                          <Heading size="text4xl" as="h2" className="!text-blue_gray-800">
                            Student Statistic
                          </Heading>
                          <div className="flex flex-wrap gap-2 rounded bg-gradient shadow-4xl">
                            <Heading size="textlg" as="h3" className="!text-gray-600">
                              week
                            </Heading>
                            <Heading size="textlg" as="h4" className="!text-gray-600">
                              month
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[44%] flex-col gap-0.5">
                        <div className="flex flex-wrap items-center justify-end">
                          <Img
                            src="images/img_arrow_left.svg"
                            alt="Arrowleft"
                            className="h-[24px] w-[24px]"
                          />
                          <Heading
                            size="textlg"
                            as="h5"
                            className="!font-jost !font-normal !text-blue_gray-800"
                          >
                            10-17 January
                          </Heading>
                          <Img
                            src="images/img_arrow_right_blue_gray_800.svg"
                            alt="Arrowright"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                      <div className="mx-[-30px] flex items-start justify-end gap-1.5 md:mx-0">
                        <div className="h-[8px] w-[8px] rounded bg-teal-600" />
                        <Heading
                          size="textlg"
                          as="h6"
                          className="self-center !font-jost !font-normal !text-blue_gray-800"
                        >
                          Avg no.
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-center gap-[13px]">
                        <Text
                          size="textxs"
                          as="p"
                          className="!text-black_900_01"
                        >
                          60%
                        </Text>
                      </div>
                      <div className="mb-1 h-px flex-1 self-end bg-gray-200" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-center gap-[13px]">
                        <Text size="textxs" as="p" className="!text-black_900_01">
                          60%
                        </Text>
                      </div>
                      <div className="mb-1 h-px flex-1 self-end bg-gray-200" />
                      <div className="flex items-start justify-between gap-5">
                        <div className="mt-4 flex flex-col items-center gap-[30px]">
                          <Text size="textxs" as="p" className="!text-black_900_01">
                            50%
                          </Text>
                          <Text size="textxs" as="p" className="!text-black_900_01">
                            30%
                          </Text>
                          <Text size="textxs" as="p" className="!text-black_900_01">
                            20%
                          </Text>
                          <Text size="textxs" as="p" className="!text-black_900_01">
                            10%
                          </Text>
                        </div>
                        <div className="flex w-[82%] flex-col gap-1 self-center">
                          <div className="relative l-2[18px]">
                            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex flex-1 items-center">
                              <div className="h-[122px] w-[22px] self-end bg-teal-500" />
                              <div className="relative ml-[-12px] flex flex-1 flex-col items-end">
                                <div className="flex flex-col items-start self-stretch">
                                  <div className="relative z-[1] flex h-[160px] w-[88%] items-start justify-end bg-[url(/public/images/img_group_7080.svg)] bg-cover bg-no-repeat px-[50px] md:h-auto md:w-full md:px-5">
                                    <div className="relative ml-[-62px] flex w-[46%] justify-center rounded bg-blue_gray-800_66 px-3.5 md:w-full">
                                      <div className="flex flex-col items-center justify-center">
                                        <Heading size="headinglg" as="p" className="!text-foundation-primary_color-p50_1">
                                          Avg
                                        </Heading>
                                        <Heading size="headings" as="p" className="!font-bold !text-foundation-primary_color-p50_1">
                                          Point
                                        </Heading>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="relative ml-6 mt-[-48px] h-[88px] w-[22px] bg-blue-900 md:ml-0" />
                                </div>
                                <div className="relative z-[2] ml-[-92px] mt-[-70px] h-[88px] w-[22px] bg-teal-500 md:ml-0" />
                                <div className="relative z-[3] ml-[-78px] mt-[-100px] h-[100px] w-[22px] bg-teal-500 md:mr-0" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[-1.00px] left-1/4 z-[4] m-auto h-[178px] w-[22px] bg-blue_gray-900_01" />
                          <div className="absolute bottom-[0.00px] right-[-41%] z-[5] m-auto flex w-[8%] flex-col items-start justify-center bg-blue_gray-900_01 py-1">
                            <div className="h-[12px] w-[12px] rounded-md border border-solid border-foundation-primary_color-p50_1 bg-teal-600" />
                          </div>
                          <div className="absolute bottom-0 right-[-16%] top-0 z-[-6] my-auto h-[218px] w-[12px] bg-blue_gray-900_01" />
  
                          <div className="flex flex-wrap py-1">
                            <Text size="textxs" as="p" className="!text-blue_gray-800">
                              SUN
                            </Text>
                            <Text size="textxs" as="p" className="ml-5 !text-blue_gray-800">
                              MON
                            </Text>
                            <Text size="textxs" as="p" className="ml-[-18px] !text-blue_gray-800">
                              TUE
                            </Text>
                            <Text size="textxs" as="p" className="ml-5 !text-blue_gray-800">
                              WED
                            </Text>
                            <Text size="textxs" as="p" className="ml-[-18px] !text-blue_gray-800">
                              THU
                            </Text>
                            <Text size="textxs" as="p" className="ml-5 !text-blue_gray-800">
                              FRI
                            </Text>
                            <Text size="textxs" as="p" className="ml-6 !text-blue_gray-800">
                              SAT
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[44%] flex-col items-center justify-center gap-9 rounded bg-foundation-primary_color_p50_1 p-4 shadow-3xl md:w-full">
                      <Heading size="text4xl" as="p" className="self-start !text-blue_gray-900">
                        Progress
                      </Heading>
                      <div className="mx-[-34px] self-stretch rounded-[86px] bg-foundation-primary_color_p50_1 md:mx-0">
                        <div className="flex items-center">
                          <div className="relative z-[7] mb-7 h-[12px] self-end rounded-md bg-teal-500" />
                          <div className="relative ml-[-6px] h-[172px] flex-1 flex-col items-start bg-[url(/public/images/img_group_13.png)] bg-cover bg-no-repeat px-1.5 py-[26px] md:h-auto sm:py-5">
                            <Heading size="headingxl" as="h4" className="text-shadow-ts flex h-[120px] w-[120px] items-center justify-center rounded-[60px] bg-foundation-primary_color_p50_1 !text-center !text-blue_gray-900">
                              38%
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 self-stretch">
                        <div className="mr-2.5 flex flex-wrap justify-between gap-5 md:mr-0">
                          <Heading size="text3xl" as="p" className="!font-inter !text-blue_gray-900">
                            Active Courses
                          </Heading>
                          <Heading size="text3xl" as="p" className="!font-inter !text-blue_gray-900">
                            12
                          </Heading>
                        </div>
                        <div className="mr-2.5 flex flex-wrap justify-between gap-5 md:mr-0">
                          <Heading size="text3xl" as="p" className="!font-inter !text-blue_gray-300">
                            Abandoned Courses
                          </Heading>
                          <Heading size="text3xl" as="p" className="!font-inter !text-blue_gray-300">
                            5
                          </Heading>
                        </div>
                      </div>
                      <Heading size="text4xl" as="p" className="!text-blue_gray-900_02">
                        MY COURSES
                      </Heading>
                    </div>
                    <div className="mt-[26px] flex w-[32%] flex-col gap-5 self-center md:w-full md:p-5">
                      <div className="flex-col gap-4 rounded-lg bg-foundation-primary_color_p50_1 py-[18px] shadow-2xl">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="textxl" as="p" className="font-medium !text-blue_gray-900_02">
                            Upcoming Activities
                          </Text>
                          <a href="#" className="mr-5">
                            <Heading size="headingmd" as="p" className="font-bold !text-foundation-primary_color-p300">
                              See all
                            </Heading>
                          </a>
                        </div>
                        <div className="mb-3 flex flex-col gap-[18px]">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <MeetingSchedule {...d} key={`listvc${index}`} />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                      <div className="flex flex-col gap-9 rounded-[5px] bg-foundation-primary_color_p50_1 px-1 py-5 shadow-2xl">
                        <div className="mx-[46px] flex flex-col gap-[22px] md:mx-0">
                          <Button
                            color="foundation_primary_color_p300"
                            shape="round"
                            leftIcon={<Img src="images/img_plus.svg" alt="Plus" className="h-[14px] w-[14px]" />}
                            className="max-w-[30px] w-full gap-2 font-nunito font-semibold md:mx-0"
                          >
                            Create Schedule
                          </Button>
                        </div>
                        <div className="flex flex-col gap-2.5 rounded-md border border-solid border-gray-100 p-3.5">
                          <div className="flex items-center justify-between gap-5 md:ml-0">
                            <Heading size="headingxs" as="p" className="!text-black-900_cc">
                              January 16, 2024
                            </Heading>
                            <Img src="images/img_favorite.svg" alt="Favorite" className="h-[8px] self-end" />
                          </div>
                          <div className="ml-1 flex flex-col gap-2 md:ml-0">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data2.map((d, index) => (
                                <NumberRow {...d} key={`listview${index}`} className="h-[24px]" />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 flex items-center justify-center rounded-[5px] bg-gray-100_02 p-2">
                        <Button
                          color="foundation_primary_color_p300"
                          size="md"
                          className="min-w-[36px] rounded-lg font-jost font-medium"
                        >
                          Ass
                        </Button>
                        <div className="flex-1 px-3">
                          <div className="flex items-end self-stretch">
                            <Heading size="headinglg" as="p" className="self-center !text-blue_gray-900_02">
                              Maths Ass Due
                            </Heading>
                          </div>
                          <div className="ml-2 h-[6px] w-[6px] rounded-[3px] bg-foundation-primary_color_p300" />
                          <Heading size="headingxs" as="p" className="ml-1 !text-blue_gray-400">
                            10 A.M - 11A.M{" "}
                          </Heading>
  
                          <Heading
                            size="headingxs"
                            as="p"
                            className="!font-jost !text-foundation-primary_color-p300 underline"
                          >
                            <span className="font-roboto text-foundation-primary_color-p300">
                              *To be submitted via Email*
                            </span>
                            <span className="font-roboto text-black-900_01">&nbsp; &nbsp;</span>
                            <span className="font-roboto text-deep_orange-a400">Due soon</span>
                          </Heading>
  
                          <div className="flex w-[26%] justify-end rounded-[5px] bg-gray-100_02 py-2 md:w-full md:p-5">
                            <div className="flex w-full items-center justify-center gap-3">
                              <Button color="blue_900" size="md" className="min-w-[36px] rounded-lg font-jost font-medium">
                                Ass
                              </Button>
                            </div>
                          </div>
  
                          <div className="flex flex-1 flex-col items-start">
                            <div className="flex items-center justify-center self-stretch">
                              <Heading size="headinglg" as="p" className="!text-blue_gray-900_02">
                                Maths Ass Due
                              </Heading>
                            </div>
                            <div className="ml-2 h-[6px] w-[6px] self-end rounded-[3px] bg-blue-900" />
                            <Heading size="headingxs" as="p" className="ml-1 !text-blue_gray-400">
                              10 A.M - 11A.M{" "}
                            </Heading>
  
                            <Heading size="headingxs" as="p" className="!font-jost !text-blue-900 underline">
                              <span className="font-roboto text-blue-900">**To be submitted via Email**</span>
                              <span className="font-roboto text-black-900_01">&nbsp; &nbsp;</span>
                              <span className="font-roboto text-deep_orange-a400">Due soon</span>
                            </Heading>
                          </div>
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