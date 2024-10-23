import { Helmet } from 'react-helmet';
import { Heading, Img } from '../../components';
import Header from "../../components/Header";
import Sidebar5 from '../../components/Sidebar5';
import UserProfile3 from '../../components/UserProfile3';
import React, { Suspense } from 'react';

const data = [
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Jan 12, 2024",
    },
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Feb 12, 2024",
    },
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Jan 12, 2024",
    },
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Feb 12, 2024",
    },
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Jan 12, 2024",
    },
    {
        cpTitle: "Applied Mathematics.",
        learnMore: "Learn the fundamentals of coding and problem-solving using popular programing languages.",
        view: "View",
        images: "/images/img_cheverlot.svg",
        src: "/images/img_ellipse1_3x4x3.png",
        userTitle: "Professor",
        username: "Andrew David",
        domain: "Web",
        jan222024: "Jan 12, 2024",
    },
];

export default function AcademicProgramTwo() {
    return (
        <>
            <Helmet>
                <title>Academic Title</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-gray-50_01">
                <div className="mb-[86px] flex items-start gap-4">
                    <Sidebar5 />
                    <div className="flex flex-1 flex-col gap-0 self-center">
                        <Header />
                        <div className="ml-3.5 mr-[34px] flex flex-col items-start gap-6 md:mx-0">
                            <Heading size="subtitle_text_2_bold" as="h1" className="!text-grey_300">
                                Academic Program
                            </Heading>
                            <div className="flex items-start gap-4 self-stretch md:flex-col">
                                <div className="w-[28%] md:w-full md:p-5">
                                    <div className="flex flex-col items-start gap-3 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3.5">
                                        <Heading as="h2">Menu</Heading>
                                        <div className="mb-[158px] flex flex-col gap-2 self-stretch">
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="h3">Courses</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="h4">Lectures and lessons</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="h5" className="!text-foundation-primary_color-p300">Assignments</Heading>
                                                <Img src="images/img_arrow_right_foundation__primary_color_p300.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="h6">Discussion forums</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="p">Progress tracking</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="p">Certificates and achievements</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                            <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5">
                                                <Heading as="h4">Quizzes and exams</Heading>
                                                <Img src="images/chevronleft.svg" alt="Arrowright" className="h-[12px] w-[12px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 self-center md:self-stretch md:p-5">
                                    <div className="flex flex-col items-start gap-4 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 px-[22px] py-5 sm:px-5">
                                        <Heading as="p">Assigments</Heading>
                                        <div className="grid grid-cols-2 gap-4 self-stretch md:grid-cols-1">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {data.map((d, index) => {
                                                    <UserProfile3 {...d} key={"gridapplied" + index} />
                                                })}
                                            </Suspense>
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
