import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import ExamIntroduction from "../../components/ExamIntroduction";
import React, { Suspense, useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

const data = [
  {
    introductionText: "Introduuction to Business",
    examDuration: "00:30:00",
    startExamText: "Start exam",
  },
  {
    introductionText: "Introduuction to Business",
    examDuration: "00:30:00",
    startExamText: "Start exam",
  },
  {
    introductionText: "Introduuction to Business",
    examDuration: "00:30:00",
    startExamText: "Start exam",
  },
  {
    introductionText: "Introduuction to Business",
    examDuration: "00:30:00",
    startExamText: "Start exam",
  },
];

export default function AcademicProgramExams() {
  // Step 1: Create state to track the active button
  const [activeMenu, setActiveMenu] = useState("Quizzes and Exams"); // Default active is "Courses"

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
        <div className="mb-[60px] flex items-start">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-9 self-center">
            <Header />
            <div className="ml-3.5 mr-[34px] md:mx-0">
              <div className="flex flex-col items-start gap-6">
                <Heading
                  size="subtitle_text_2_bold"
                  as="h1"
                  className="text-grey_300"
                >
                  Academic Program
                </Heading>

                <div className="flex items-start gap-3.5 self-stretch md:flex-col">
                  <div className="w-[28%] md:w-full md:p-5">
                    <div className="flex flex-col items-start gap-3 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3.5">
                      <Heading as="h2">Menu</Heading>

                      <div className="mb-[158px] flex flex-col gap-2 self-stretch">
                        {/* Step 2: Apply dynamic border class based on the active state */}

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Courses"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Courses")}
                        >
                          <Link
                            to="/academic-program-courses"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Courses"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Courses
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Lectures and Lessons"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() =>
                            handleMenuClick("Lectures and Lessons")
                          }
                        >
                          <Link
                            to="/academic-program-lectures"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Lectures and Lessons"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Lectures and Lessons
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Assignments"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Assignments")}
                        >
                          <Link
                            to="/academic-program-assignments"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Assignments"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Assignments
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Discussion Forum"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Discussion Forum")}
                        >
                          <Link
                            to="/academic-program-discussion-forum"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Discussion Forum"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Discussion Forum
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Progress Tracking"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Progress Tracking")}
                        >
                          <Link
                            to="/academic-program-progress-tracking"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Progress Tracking"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Progress Tracking
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Certificates and Achievements"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() =>
                            handleMenuClick("Certificates and Achievements")
                          }
                        >
                          <Link
                            to="/academic-program-achievements"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Certificates and Achievements"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Certificates and Achievements
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Quizzes and Exams"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Quizzes and Exams")}
                        >
                          <Link
                            to="/academic-program-exams"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Quizzes and Exams"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Quizzes and Exams
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex-1 self-center md:grid md:grid-cols-2 md:self-stretch sm:grid-cols-1 md:p-5"> */}
                  <div className="flex-1 self-center md:self-stretch md:p-5">
                    <div className="flex flex-col items-start gap-4 pt-4 pb-10 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 px-[22px] py-5px] sm:px-5">
                      <Heading as="p">Quizzes and exams</Heading>
                      <div className="grid grid-cols-2 gap-4 self-stretch md:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <Link
                              to={`/quizzes-and-exams`}
                              key={"gridintroductio" + index}
                              className="flex"
                            >
                              <ExamIntroduction {...d} />
                            </Link>
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
