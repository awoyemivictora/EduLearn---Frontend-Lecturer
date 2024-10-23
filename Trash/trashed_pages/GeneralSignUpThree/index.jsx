import { Helmet } from 'react-helmet';
import { Button, Heading } from "../../components";
import React from 'react';

export default function GeneralSignUpThree() {
    return (
        <>
            <Helmet>
                <title>EduLearn</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full items-center gap-5 bg-gray-100_01 p-[30px] md:flex-col sm:p-5">
                <div className="mb-[34px] flex flex-1 flex-col gap-[26px] md:self-stretch">
                    <div className="flex flex-col items-center justify-center gap-8 rounded-[28px] bg-foundation-primary_color-p50-1 px-14 py-[266px] md:px-5">
                        <div className="flex flex-col items-center gap-8 rounded-[28px] bg-blue_gray-50_01">
                            <div className="flex flex-col items-center gap-1 self-stretch px-14 md:px-5">
                                <Heading size="subtitle_text_2_bold" as="h1" className="text-grey_300">
                                    Successful
                                </Heading>
                                <Heading as="h2" className="w-[62%] text-center leading-[120%] !text-gray-700 md:w-full md:p-5">
                                    Account creation was successful, Login with your new credentials to access your account
                                </Heading>
                            </div>
                            <a href="https://www.youtube.com/embed/vp8fVkoZZl7" target="_blank" rel="noreferrer">
                                <Button
                                    color="orange_900"
                                    shape="round"
                                    className="white_A700_33_white_A700_33_border min-w-[342px] border border-solid font-medium sm:px-5"
                                >
                                    Home
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-7 md:flex-col">
                    <div className="h-[276px] w-[280px] rounded-[20px] bg-black-900_01" />
                    <div className="h-[276px] flex-1 rounded-[20px] bg-gray-300 md:self-stretch" />
                </div>
                <div className="flex w-[34%] flex-col gap-[26px] md:w-full">
                    <div className="h-[52px] rounded-[20px] bg-gray-300" />
                    <div className="h-[52px] rounded-[20px] bg-gray-300" />
                </div>
            </div>
        </>
    );
}
