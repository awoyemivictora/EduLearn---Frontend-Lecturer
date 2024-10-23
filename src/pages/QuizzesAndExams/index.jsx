import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import React, { useState } from "react";
import { CaretRight, ArrowRight,  } from "phosphor-react";
import { Link } from "react-router-dom";



export default function QuizzesAndExams() {
  // Step 1: Create state to track the active button
  const [activeMenu, setActiveMenu] = useState("Examination"); // Default active is "Courses"

  // Function to update the active button
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray_50_01">
        <div className="flex items-start">
          <SidebarMenu className="self-center" />
          <div className="flex flex-1 flex-col gap-9">
            <Header />
            <div className="ml-3.5 mr-[34px] flex items-center gap-3 md:mx-0 md:flex-col">
              <div className="flex w-[28%] flex-col items-start gap-4 md:w-full md:p-5">
                <Heading
                  size="subtitle_text_2_bold"
                  as="h1"
                  className="!text-grey_300"
                >
                  Quizzes and Exams
                </Heading>


                  <div className="flex flex-col items-start gap-3 -mt-18 self-stretch rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3.5">
                    {/* <Heading as="h2" className="mt-4"> </Heading> */}
                    <div className="mb-[290px] flex flex-col gap-2 self-stretch">
                      
                      {/* <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Heading>Notes</Heading>
                        <CaretRight />
                      </div>

                      <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Heading>PDF</Heading>
                        <CaretRight />
                      </div>

                      <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Heading>Past Questions</Heading>
                        <CaretRight />
                      </div>

                      <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                        <Heading>Examination</Heading>
                        <CaretRight />
                      </div> */}


                      <button
                            type="button"
                            className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                              activeMenu === "Notes"
                                ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                                : "bg-foundation-primary_color-p50-1"
                            }`}
                            onClick={() => handleMenuClick("Notes")}
                          >
                            <Link
                              to="/quizzes-and-exams"
                              className={`flex items-center w-full h-full ${
                                activeMenu === "Notes" ? "!text-foundation-primary_color-p300" : ""
                              }`}
                            >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Notes"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Notes
                            </Heading>
                            <CaretRight size={12} />
                            </Link>
                          </button>

                      <button
                            type="button"
                            className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                              activeMenu === "PDF"
                                ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                                : "bg-foundation-primary_color-p50-1"
                            }`}
                            onClick={() => handleMenuClick("PDF")}
                          >
                            <Link
                              to="/quizzes-and-exams"
                              className={`flex items-center w-full h-full ${
                                activeMenu === "PDF" ? "!text-foundation-primary_color-p300" : ""
                              }`}
                            >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "PDF"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              PDF
                            </Heading>
                            <CaretRight size={12} />
                            </Link>
                          </button>

                      <button
                            type="button"
                            className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                              activeMenu === "Past Questions"
                                ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                                : "bg-foundation-primary_color-p50-1"
                            }`}
                            onClick={() => handleMenuClick("Past Questions")}
                          >
                            <Link
                              to="/quizzes-and-exams"
                              className={`flex items-center w-full h-full ${
                                activeMenu === "Past Questions" ? "!text-foundation-primary_color-p300" : ""
                              }`}
                            >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Past Questions"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Past Questions
                            </Heading>
                            <CaretRight size={12} />
                            </Link>
                          </button>

                      <button
                            type="button"
                            className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                              activeMenu === "Examination"
                                ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                                : "bg-foundation-primary_color-p50-1"
                            }`}
                            onClick={() => handleMenuClick("Examination")}
                          >
                            <Link
                              to="/quizzes-and-exams"
                              className={`flex items-center w-full h-full ${
                                activeMenu === "Examination" ? "!text-foundation-primary_color-p300" : ""
                              }`}
                            >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Examination"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Examination
                            </Heading>
                            <CaretRight size={12} />
                            </Link>
                          </button>
                      
                    </div>
                  </div>
                </div>


                  <div className="flex-1 self-end md:self-stretch pt-0 mt-24 md:p-5 sm:self-auto">
                    <div className="flex flex-col items-end rounded-[12px] border border-solid border-blue_gray-50 bg-foundation-primary_color-p50-1 p-4">
                      <div className="flex items-center justify-between gap-5 self-stretch rounded-md bg-foundation-primary_color-p50-0 px-[18px] py-8 sm:py-5">
                        <Heading size="subtitle_text_bold" as="h6" className="!text-foundation-primary_color-p300">
                          Introduction to Business
                        </Heading>
                        <Button
                          size="sm"
                          shape="round"
                          className="mr-3.5 min-w-[112px] !rounded font-medium !text-foundation-primary_color-p50-0 bg-foundation-primary_color-p300 md:mr-0"
                        >
                          Question 1 of 20
                        </Button>
                      </div>

                      <div className="mt-4 flex flex-col gap-6 self-stretch">
                        <div className="flex flex-col items-start gap-2.5 border-b border-solid border-blue_gray-50">
                          <Heading size="subtitle_text_bold" as="h6" className="!text-grey_300">
                            Question
                          </Heading>
                          <Heading size="text4xl" as="p" className="mb-3 !font-outfit !font-normal !text-gray-600_01">
                            What is a primary objective of financial management within a company?
                          </Heading>
                        </div>
                        <div className="flex flex-col items-startt gap-2.5">
                          <Heading size="subtitle_text_bold" as="h6" className="!text-grey_300">
                            Answers
                          </Heading>
                          <Checkbox 
                            name="checkmark"
                            label="Expanding into new markets"
                            id= "checkmark"
                            className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-[13px] font-medium text-grey_200 sm:pr-5"
                            />
                          <Checkbox 
                            name="hiringmoremplo"
                            label="Hiring more employees"
                            id= "hiringmoreemplo"
                            className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-[13px] font-medium text-grey_200 sm:pr-5"
                            />
                          <Checkbox 
                            name="increasingprodu"
                            label="Increasing production capacity"
                            id= "increasingprodu"
                            className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-[13px] font-medium text-grey_200 sm:pr-5"
                            />
                          <Checkbox 
                            name="maximizingshare"
                            label="Maximizing shareholder wealth"
                            id= "maximizingshare"
                            className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-[13px] font-medium text-grey_200 sm:pr-5"
                            />
                        </div>
                      </div>
                      <Button
                        color="foundation__primary_color_p300"
                        shape="round"
                        rightIcon={<ArrowRight />}
                        className="white_A700_33_white_A7000_33_border mt-[38px] text-foundation-primary_color-p50-1 bg-foundation-primary_color-p300 min-w-[142px] gap-1 border border-solid font-medium sm:px-5"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
}
