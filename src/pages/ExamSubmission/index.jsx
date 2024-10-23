import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import LibraryBooks from "../../components/LibraryBooks";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Helmet } from "react-helmet";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState } from "react";
import { CaretRight, Check } from "phosphor-react";
import { Link } from "react-router-dom";

export default function ExamSubmission() {
  // Step 1: Create state to track the active button
  const [activeMenu, setActiveMenu] = useState("Examination"); // Default active is "Courses"

  // Function to update the active button
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  
  return (
    <>
      <Helmet>
        <title>EduLearner</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="full bg-gray_50_01">
        <div className="flex items-start">
          <SidebarMenu />
          <div className="flex flex-col gap-9">
            <Header />
            <div className="flex flex-col gap-6 md:w-full md:p-5">
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


              <div className="flex flex-col items-center gap-5 sm:self-auto">
                <div className="flex justify-center rounded-[12px] border border-solid border-blue_gray_50 bg-foundation-primary_color-p50-1 px-14 py-28">
                  <div className="flex flex-col items-center gap-4 rounded-[10px] bg-foundation-primary_color-p50-1 px-14 py-12 md:w-full md:p-5">
                    <Img
                      src="images/img_check_24x24.svg"
                      alt="Check24dpFill"
                      className="h-[42px] w-[42px]"
                    />
                    <Check size={32} />
                    <Heading
                      size="subtitle_text_bold"
                      as="h6"
                      className="text-grey_300"
                    >
                      Submitted Successfully
                    </Heading>
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
