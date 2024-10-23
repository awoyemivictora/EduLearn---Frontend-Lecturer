import { Helmet } from 'react-helmet';
import { Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/MainSideBar";
import React from "react";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>EduLearn</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-gray-50_01">
                <div className="mb-8 flex items-start">
                    <Sidebar1 />
                    <div className="flex flex-1 flex-col gap-4 self-center">
                        <Header />
                        <div className="ml-4 mr-4 gap-4 flex">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-1 gap-[18px] md:self-stretch md:p-5 sm:flex-col">
                                    <div className="flex w-full justify-center rounded-[10px] bg-grey_100 px-14 py-[72px] md:p-5 sm:w-full">
                                        <Heading as="h1" className="mb-1 !text-black-900_01">
                                            Courses in progress
                                        </Heading>
                                    </div>
                                    <div className="flex w-full justify-center rounded-[10px] bg-grey_100 px-14 py-[72px] md:p-5 sm:w-full">
                                        <Heading as="h2" className="mb-1 !text-black-900_01">
                                            Active Prototypes
                                        </Heading>
                                    </div>
                                    <div className="flex w-[40%] justify-center rounded-[10px] bg-grey_100 px-14 py-[72px] md:w-full md:p-5">
                                        <Heading as="h3" className="mb-1 !text-black-900_01">
                                            Hours Learning
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] sm:flex-col">
                                    <div className="flex flex-1 justify-center rounded-[10px] bg-grey_100 px-14 py-[148px] md:p-5 sm:self-stretch">
                                        <Heading as="h4" className="mb-3 !text-black-900_01">
                                            Study Statistics
                                        </Heading>
                                    </div>
                                    <div className="flex w-[40%] justify-center rounded-[10px] bg-grey_100 px-14 py-[148px] md:w-full sm:w-full">
                                        <Heading as="h5" className="mb-3.5 !text-black-900_01">
                                            Progress
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex gap-5 md:flex-col">
                                    <div className="flex flex-1 gap-5 md:flex-col md:self-stretch md:p-5">
                                        <div className="flex w-full justify-center rounded-[10px] bg-grey_100 px-14 py-[130px] md:p-5">
                                            <Heading as="h6" className="mb-3.5 !text-black-900_01">
                                                Courses
                                            </Heading>
                                        </div>
                                        <div className="flex w-full justify-center rounded-[10px] bg-grey_100 px-14 py-[132px] md:p-5">
                                            <Heading as="p" className="mb-2 !text-black-900_01">
                                                Courses
                                            </Heading>
                                        </div>
                                        <div className="flex w-[32%] justify-center rounded-[10px] bg-grey_100 px-14 py-[132px] md:w-full md:p-5">
                                            <Heading as="p" className="mb-2 !text-black-900_01">
                                                Courses
                                            </Heading>
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
