import { Helmet } from 'react-helmet';
import { Button, Img, Input, Heading } from "../../components";
import React from 'react';

export default function GeneralSignUpTwo() {
    return (
        <>
            <Helmet>
                <title>EduLearn</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-gray-100_01 py-[30px] sm:px-5">
                <div className="mb-[34px] flex flex-col gap-[26px] md:flex-col md:self-stretch">
                    <div className="flex flex-col items-center justify-center gap-8 rounded-[28px] bg-foundation-primary_color-p50-1 px-14 py-[166px] md:px-5">
                        <div className="flex flex-col items-center gap-8 rounded-[34px] bg-blue_gray-50_01" />
                        <div className="h-[68px] w-[68px] rounded-[34px] bg-blue_gray-50_01" />
                        <div className="flex flex-col items-center gap-1 self-stretch px-14 md:px-5">
                            <Heading size="subtitle_text_2_bold" as="h1" className="text-grey_300">
                                Security
                            </Heading>
                            <Heading as="h2" className="w-[62%] text-center leading-[120%] text-gray-700 md:w-full md:p-5">
                                Setup a secured password
                            </Heading>
                        </div>
                        <div className="flex flex-col gap-8 md:w-full">
                            <div className="flex flex-col items-start gap-1">
                                <Heading as="h4" className="text-gray-700">
                                    New Password
                                </Heading>
                                <Input
                                    shape="round"
                                    type="password"
                                    name="newpassword"
                                    placeholder="Enter password"
                                    suffix={<Img src="images/img_eye.svg" alt="Eye" className="h-[12px] w-[12px]" />}
                                    className="gap-[34px] self-stretch border"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <Heading as="h4" className="text-gray-700">
                                    Confirm Password
                                </Heading>
                                <Input
                                    shape="round"
                                    type="password"
                                    name="confirmpassword"
                                    placeholder="Enter password"
                                    suffix={<Img src="images/img_eye.svg" alt="Eye" className="h-[12px] w-[12px]" />}
                                    className="gap-[34px] self-stretch border"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="https://www.youtube.com/embed/vp8fVkoZZl7" target="_blank" rel="noreferrer">
                                <Button
                                    color="orange_900"
                                    shape="round"
                                    rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                                    className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
                                >
                                    Finish
                                </Button>
                            </a>
                            <Button
                                shape="round"
                                leftIcon={<Img src="images/img_chevronleft.svg" alt="Chevron Left" className="h-[12px] w-[12px]" />}
                                className="w-full gap-1 border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs sm:px-5"
                            >
                                Go back
                            </Button>
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