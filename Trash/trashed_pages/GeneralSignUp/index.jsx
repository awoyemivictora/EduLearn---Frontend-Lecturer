import { Helmet } from 'react-helmet';
import { Button, Img, Input, Heading, DatePicker } from '../../components';
import React from 'react';

export default function GeneralSignup() {
    return (
        <>
            <Helmet>
                <title>EduLearn</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-[full] items-center gap-5 bg-[#3040] md:flex-col sm:px-5">
                <div className="md:[flex-col] w-[87%] flex items-center justify-between gap-4 md:w-full md:flex-col md:self-stretch">
                    <div className="flex flex-col items-center justify-center gap-[50px] rounded-[20px] bg-foundation-primary_color-p50-1 px-14 py-[152px] md:px-5">
                        <div className="flex flex-col items-center justify-center gap-5 bg-[#3040] md:w-full">
                            <div className="flex flex-col items-center gap-[50px] bg-white_A700 border border-solid border-gray_800 justify-center px-10 py-4 rounded-lg md:gap-10 md:px-5">
                                <div className="flex flex-col gap-[32px] items-start justify-start self-stretch md:px-5">
                                    <Heading as="h2" className="text-gray_707">
                                        Let's get started by collecting some basic information about you
                                    </Heading>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <Heading as="h3" className="text-gray_707">
                                            First Name
                                        </Heading>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="firstname"
                                            placeholder="Enter first name"
                                            className="self-stretch border sm:pr-5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <Heading as="h3" className="text-gray_707">
                                            Last Name
                                        </Heading>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="lastname"
                                            placeholder="Enter last name"
                                            className="self-stretch border sm:pr-5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <Heading as="h3" className="text-gray_707">
                                            Date of Birth
                                        </Heading>
                                        <DatePicker
                                            name="lock"
                                            placeholder="dd/mm/yyyy"
                                            className="flex gap-[14px] self-stretch rounded-md border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3 text-[16px] text-grey_200"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-6 w-full">
                                        <Heading as="h3" className="text-gray_707">
                                            Phone Number
                                        </Heading>
                                        <Input
                                            shape="round"
                                            type="number"
                                            name="phonenumber"
                                            placeholder="Enter phone number"
                                            className="self-stretch border sm:pr-5"
                                        />
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/embed/vp8fVkoZZl7" target="_blank" rel="noreferrer">
                                    <Button
                                        className="orange_900"
                                        shape="round"
                                        rightIcon={<Img src="/images/img_arrowright.svg" alt="Arrow Right" className="w-[12px] vl-[12px]" />}
                                    >
                                        <div className="white_A700_33 white_A700_33_border w-full gap-4 border border-solid font-medium sm:px-5">
                                            Next
                                        </div>
                                    </Button>
                                </a>
                                <div className="flex gap-7 md:flex-col">
                                    <div className="w-[20px] ml-[20px] rounded-[20px] bg-black-900_01" />
                                    <div className="w-[52px] ml-[20px] bg-gray-300 md:self-stretch" />
                                </div>
                                <div className="flex w-[34%] lg:w-[20%] md:w-[full] md:flex-col">
                                    <div className="w-[52px] rounded-[20px] bg-gray-300 md:self-stretch" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
