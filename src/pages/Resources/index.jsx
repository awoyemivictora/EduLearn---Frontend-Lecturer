import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import LibraryBooks from "../../components/LibraryBooks";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Helmet } from "react-helmet";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

const data = [
  {
    userImage: "images/img_compsci_intro.png",
    introText: "Introduction to Programming",
    descriptionText:
      "Learn the fundamentals of coding and problem-solving using popular programming languages.",
  },
  {
    userImage: "images/img_data_structures.png",
    introText: "Fundamentals of Mathematics",
    descriptionText:
      "Covers essential math topics like algebra, geometry, and calculus. Includes exercises and real-world examples.",
  },
  {
    userImage: "images/img_web_development.png",
    introText: "Principles of Biology",
    descriptionText:
      "Explores key biology concepts, including cell biology and genetics. Features diagrams and interactive exercises",
  },
  {
    userImage: "images/img_machine_learning.png",
    introText: "Modern World History",
    descriptionText:
      "A comprehensive look at global history from the Renaissance to today, with maps and timelines.",
  },
];

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="mb-[30px] flex items-start">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-[30px] self-center">
            <Header />

            <Tabs
              className="ml-4 mr-[34px] flex flex-col items-center md:mx-0"
              selectedTabClassName="!text-blue_gray-700 border-foundation-primary_color-p300 border-b border-style-[normal]"
              selectedTabPanelClassName="mt-[30px] relative tab-panel--selected"
            >
              <div className="flex flex-col items-start self-stretch">
                <Heading
                  size="subtitle_text_2_bold"
                  as="h1"
                  className="!text-grey_300"
                >
                  Resources
                </Heading>
                <Heading as="h2">
                  Welcome to Our Educational Resources Library!
                </Heading>
              </div>
              <TabList className="mt-6 flex gap-4 self-start w-full">
                <Tab className="py-2 text-sm font-medium text-blue_gray-700 focus:outline-none focus:ring-0">
                  Featured Resources
                </Tab>
                <Tab className="py-2 text-sm font-medium text-blue_gray-700 focus:outline-none focus:ring-0">
                  Premium Resources
                </Tab>
              </TabList>

              {[...Array(2)].map((_, index) => (
                <TabPanel
                  key={`tab-panel-${index}`}
                  className="absolute mt-[30px] items-center self-stretch"
                >
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-6">
                      <div className="relative h-[204px] rounded-[18px] md:h-auto">
                        {/* Background image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[18px]"
                          style={{
                            backgroundImage: `url('/images/paper.png')`,
                          }}
                        ></div>

                        {/* Green overlay */}
                        <div className="absolute inset-0 bg-gradient1 bg-cover bg-no-repeat opacity-85 rounded-[18px]"></div>

                        {/* Content */}
                        <div className="relative z-10 ml-6 pt-6 flex items-start gap-9 md:flex-col">
                          <div className="mt-5 flex flex-1 flex-col items-start gap-2.5 md:self-stretch md:p-5">
                            <Heading
                              size="subtitle_text_2_bold"
                              as="h3"
                              className="!text-foundation-primary_color-p50-1"
                            >
                              Explore a World of Knowledge
                            </Heading>
                            <Heading
                              as="h4"
                              className="w-full !font-normal leading-[120%] !text-foundation-primary_color-p50-1"
                            >
                              Welcome to our comprehensive educational resources
                              library! Here, you’ll find a wealth of materials
                              designed to support your learning journey, whether
                              you’re a student, educator, or lifelong learner.
                            </Heading>
                          </div>
                          <Img
                            src="images/books-pile.png"
                            alt="Bookspileone"
                            className="h-[174px] w-[36%] mt-1.5 self-center object-cover md:w-full"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-5">
                        <Heading
                          size="subtitle_text_2_bold"
                          as="h5"
                          className="!text-grey_300"
                        >
                          Browse Our Collections
                        </Heading>

                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex items-center justify-center gap-[30px] md:flex-col">
                            <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
                              <Heading
                                size="body_text_bold"
                                as="h6"
                                className="!text-grey_300"
                              >
                                Textbooks and Study Guides
                              </Heading>
                              <Heading as="p" className="!font-normal">
                                Dive into our collection of textbooks and study
                                guides covering a wide range of subjects, from
                                mathematics and science to literature and
                                history.
                              </Heading>
                            </div>

                            <Button
                              color="foundation__primary_color_p300"
                              shape="round"
                              rightIcon={<CaretRight />}
                              className="min-w-[96px] gap-1 white_A700_33_white_A7000_33_border bg-foundation-primary_color-p50-1 border border-solid border-gray-300 hover:text-foundation-primary_color-p50-1 hover:bg-foundation-primary_color-p300 font-medium sm:px-5"
                            >
                              See more
                            </Button>
                          </div>

                          {/* <div className="flex items-center self-stretch justify-center gap-[10px] md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data.map((d, index) => (
                                <LibraryBooks
                                  {...d}
                                  key={"ListIntroduction1" + index}
                                  className="flex-1"
                                />
                              ))}
                            </Suspense>
                          </div> */}

                          <div className="flex items-center self-stretch justify-center gap-[10px] md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data.map((d, index) => (
                                <div
                                  key={"ListIntroduction1" + index}
                                  className="flex flex-col h-full bg-white rounded-lg overflow-hidden"
                                >
                                  {/* Render the LibraryBooks component */}
                                  <div className="flex-1">
                                    <LibraryBooks
                                      {...d}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              ))}
                            </Suspense>
                          </div>



                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex items-center justify-center gap-[30px] md:flex-col">
                            <div className="flex flex-1 flex-col items-start md:self-stretch md:p-5">
                              <Heading
                                size="body_text_bold"
                                as="h6"
                                className="!text-grey_300"
                              >
                                Research Papers and Journals
                              </Heading>
                              <Heading as="p" className="!font-normal">
                                Stay up-to-date with the latest research in your
                                field with our curated selection of academic
                                papers and journals.
                              </Heading>
                            </div>

                            <Button
                              color="foundation__primary_color_p300"
                              shape="round"
                              rightIcon={<CaretRight />}
                              className="min-w-[96px] gap-1 white_A700_33_white_A7000_33_border bg-foundation-primary_color-p50-1 border border-solid border-gray-300 hover:text-foundation-primary_color-p50-1 hover:bg-foundation-primary_color-p300 font-medium sm:px-5"
                            >
                              See more
                            </Button>
                          </div>

                          {/* <div className="flex gap-5 md:flex-col self-stretch"> */}
                          <div className="flex items-center self-stretch justify-center gap-[10px] md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data.map((d, index) => (
                                <LibraryBooks
                                  {...d}
                                  key={"ListIntroduction1" + index}
                                  className="flex-1"
                                />
                              ))}
                            </Suspense>
                            {/* <Button
                              className="request_for_border min-w-[140px] gap-1 rounded-md px-[9px] font-medium text-foundation-primary_color-p50-1 shadow-lg"
                              coolor="foundation__primary_color_p300"
                              size="sm"
                              shape="round"
                              variant={null}
                              rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                            >
                              Request for book
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
