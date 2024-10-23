import { Helmet } from "react-helmet";
// import { Button, Img, CheckBox, Heading } from "../../components";
import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar6 from "../../components/Sidebar6";
import React from "react";
import Checkbox from '../../components/Checkbox';


export default function AcademicProgramEight() {
  return (
    <>
      <Helmet>
        <title>EduLearner</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="bg-white_A700 pb-[50px]">
        <div className="flex items-start">
          <Sidebar6 className="flex flex-col gap-9 items-start justify-start w-[23%]" />
          <div className="flex flex-1 flex-col gap-9 self-center">
            <Header className="flex flex-col items-center gap-3 md:mx-0 md:flex-col" />
            <div className="flex flex-col items-start gap-6 md:w-full md:pb-5">
              <Heading size="subtitle_text_2_bold" as="h1" className="text-grey_300">
                Quizzes and Exams
              </Heading>
              <div className="flex flex-col items-start gap-3.5 self-stretch rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3.5">
                <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                  <Heading as="h3">Past Questions</Heading>
                  <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                </div>
                <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                  <Heading as="h3">Most Attempted</Heading>
                  <Img src="images/img_chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                </div>
              </div>
              <div className="flex self-end md:self-auto">
                <div className="flex flex-col items-end md:items-start w-[100%]">
                  <Heading
                    size="subtitle_text_bold md:text_bold"
                    as="h2"
                    className="text-foundation-primary_color-p300"
                  >
                    Introduction to Business
                  </Heading>
                  <Heading
                    size="subtitle_text_regular md:text_regular"
                    as="h3"
                    className="text-foundation-primary_color-p300"
                  >
                    Question 2 of 20
                  </Heading>
                  <div className="flex flex-col gap-6 self-stretch">
                    <Heading
                      size="text_small md:text_small"
                      as="h4"
                      className="text-foundation-primary_color-p300"
                    >
                      What is a primary objective of financial management within a company?
                    </Heading>
                    <div className="flex flex-col items-start gap-2.5">
                      <Heading
                        size="subtitle_text_bold"
                        as="h5"
                        className="text-grey_300"
                      >
                        Answers
                      </Heading>
                      <Checkbox
                        name="Expanding into new markets"
                        label="Expanding into new markets"
                        className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-medium text-grey_200 sm:pr-5"
                      />
                      <Checkbox
                        name="Hiring more employees"
                        label="Hiring more employees"
                        className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-medium text-grey_200 sm:pr-5"
                      />
                      <Checkbox
                        name="Increasing production capacity"
                        label="Increasing production capacity"
                        className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-medium text-grey_200 sm:pr-5"
                      />
                      <Checkbox
                        name="Maximizing shareholder wealth"
                        label="Maximizing shareholder wealth"
                        className="gap-1.5 self-stretch rounded-md bg-foundation-primary_color-p50-1 py-2.5 pr-[34px] text-medium text-grey_200 sm:pr-5"
                      />
                    </div>
                  </div>
                  <Button
                    color="foundation_primary_color_p300"
                    className="gap-2.5 min-w-[140px] mt-[18px] self-end sm:self-center"
                    rightIcon={
                      <Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />
                    }
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
