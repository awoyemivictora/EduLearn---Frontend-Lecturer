import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Heading, Img } from "../../components";
import Sidebar6 from "../../components/Sidebar6";
import UserProgress from "../../components/UserProgress";
import React, { Suspense } from "react";

const data = [
  {
    cirriculaprogramfeat: "TST",
    programmetypespecfeat: "Certificate",
    descriptionText: "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    primaryspecfeatures: "Foundation Certificate Course",
    secondaryspecfeatures: "Intermediate Course",
    image: "images/img_group79_127x128.png",
    userprogressbehaviour: "TST",
  },
  {
    cirriculaprogramfeat: "TST",
    programmetypespecfeat: "Certificate",
    descriptionText: "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    primaryspecfeatures: "Finance and banking",
    secondaryspecfeatures: "Advanced Course",
    image: "images/img_group79_127x128.png",
    userprogressbehaviour: "TST",
  },
  {
    cirriculaprogramfeat: "TST",
    programmetypespecfeat: "Certificate",
    descriptionText: "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    primaryspecfeatures: "Financial modeling and value",
    secondaryspecfeatures: "Advanced Course",
    image: "images/img_group79_127x128.png",
    userprogressbehaviour: "TST",
  },
  {
    cirriculaprogramfeat: "TST",
    programmetypespecfeat: "Certificate",
    descriptionText: "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    primaryspecfeatures: "Finance and banking",
    secondaryspecfeatures: "Advanced Course",
    image: "images/img_group79_127x128.png",
    userprogressbehaviour: "TST",
  },
];

export default function AcademicProgramFour() {
  return (
    <>
      <Helmet>
        <title>EduLearner</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="bg-white_A700 flex flex-col items-start justify-start mx-[auto] pb-[50px] w-[100%]">
        <div className="flex items-start gap-9 w-[100%]">
          <Sidebar6 className="flex flex-col gap-9 items-start justify-start w-[23%]" />
          <div className="flex flex-col font-inter gap-[35px] items-center justify-center w-[100%]">
            <Header className="flex flex-col items-center justify-center md:mx-0 md:w-full" />
            <div className="flex flex-col gap-[35px] justify-start max-w-[1380px] mx-[auto] px-[15px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-start justify-start w-[100%]">
                <Heading
                  size="subtitle_text_2_bold"
                  as="h1"
                  className="text-grey_300"
                >
                  Academic Program
                </Heading>
                <div className="grid grid-cols-3 gap-[35px] items-start justify-center w-[100%]">
                  <div className="flex flex-col items-center justify-center rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-[18px] shadow-bs w-[100%]">
                    <Heading
                      size="h4"
                      as="h2"
                      className="text-foundation-primary_color-p300"
                    >
                      Courses
                    </Heading>
                    <Img
                      src="images/img_arrowright_foundation_primary_color_p300.svg"
                      alt="Arrowright"
                      className="h-[12px] w-[12px]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Lectures and lessons</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Assignments</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Discussions in forums</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Progress tracking</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Certificates and achievements</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                  <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                    <Heading as="h3">Quizzes and exams</Heading>
                    <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-lg border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-[22px] py-[18px] sm:px-5">
                  <Suspense fallback={<div>Loading...</div>}>
                    {data.map((item, index) => (
                      <UserProgress {...item} key={`userperformfeat-${index}`} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
