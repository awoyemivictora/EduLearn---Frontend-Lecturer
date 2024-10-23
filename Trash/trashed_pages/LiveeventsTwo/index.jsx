import { Helmet } from "react-helmet";
import { Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar14 from "../../components/Sidebar14";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function LiveeventsTwo() {
  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="full bg-gray-50_01">
        <div className="flex items-start">
          <Sidebar14 />
          <div className="flex flex-1 flex-col gap-[30px]">
            <Header />
            <Tabs className="ml-4 mr-[34px] flex flex-col items-center md:mx-0" selectedTabClassName="!text-blue_gray-700 border-foundation-primary_color-p300 border-b border-style-[normal]" selectedTabPanelClassName="mt-[30px] relative tab-panel--selected">
              <div className="flex flex-col items-start justify-center self-stretch">
                <Heading size="subtitle_text_2_bold" as="h1" className="!text-grey_300">
                  Resources
                </Heading>
                <Heading as="h2">Welcome to Our Educational Resources Library!</Heading>
              </div>
              <TabList className="mt-3 flex flex-wrap gap-4">
                <Tab className="py-2 text-sm font-medium text-blue_gray-700">Featured Resources</Tab>
                <Tab className="py-2 text-sm font-medium text-blue_gray-700">Premium Resources</Tab>
              </TabList>
              {[...Array(2)].map((_, index) => (
                <TabPanel key={`tab-panel-${index}`} className="absolute mt-[30px] justify-center self-stretch">
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-6">
                      <div className="h-[204px] rounded-[18px] bg-[url(/public/images/img_group_854.png)] bg-cover bg-no-repeat px-1.5 md:h-auto">
                        <div className="mt-7 flex flex-1 flex-col items-start gap-3 md:self-stretch">
                          <Heading size="subtitle_text_2_bold" as="h3" className="!text-foundation-primary_color-p50-1">
                            Unlock Premium Content
                          </Heading>
                          <Heading as="h4" className="w-[86%] !font-normal leading-[120%] !text-foundation-primary_color-p50-1 md:w-full md:p-5">
                            Some of our resources are available exclusively to premium members. Unlock access to premium content by redeeming tokens, which can be earned through various activities such as completing quizzes, participating in discussions, or achieving milestones within the platform.
                          </Heading>
                          <Button
                            size="sm"
                            shape="round"
                            className="min-w-[94px] border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs"
                          >
                            Unlock Now
                          </Button>
                          <Img
                            src="images/img_ethereum_classic.png"
                            alt="Ethereum"
                            className="h-[198px] w-[30%] self-center object-cover md:w-full"
                          />
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
