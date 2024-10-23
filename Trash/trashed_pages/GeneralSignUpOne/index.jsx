import { Helmet } from 'react-helmet';
import { Button, Img, SelectBox, Heading } from "../../components";
import React from 'react';

const dropdownOptions = [
    { label: "option1", value: "option1" },
    { label: "option2", value: "option2" },
    { label: "option3", value: "option3" },
];

export default function GeneralSignUpOne() {
    return (
        <>
            <Helmet>
                <title>EduLearn</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-[full] items-center gap-5 bg-gray-100_01 p-[30px] md:flex-col sm:p-5">
                <div className="md:[flex-col] flex flex-1 flex-col gap-[26px] md:self-stretch">
                    <div className="flex flex-col items-center justify-center gap-8 rounded-[28px] bg-foundation-primary_color-p50-1 px-14 py-[128px] md:px-5">
                        <div className="flex flex-col items-center gap-8 w-[86%] md:w-full">
                            <div className="flex flex-col items-start gap-4 md:w-full">
                                <Heading size="subtitle_text_2_bold" as="h4" className="text-grey_300">
                                    Address Details
                                </Heading>
                                <Heading as="h4" className="self-stretch text-center leading-[12px] text-gray-700">
                                    Share your current address to help us keep you informed about campus updates and relevant information.
                                </Heading>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 md:w-full">
                            <div className="flex flex-col items-start gap-1">
                                <Heading as="h4" className="text-gray-700">
                                    Country
                                </Heading>
                                <SelectBox
                                    shape="round"
                                    indicator={(
                                        <Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />
                                    )}
                                    name="country"
                                    placeholder="Select"
                                    options={dropdownOptions}
                                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <Heading as="h4" className="text-gray-700">
                                    State
                                </Heading>
                                <SelectBox
                                    shape="round"
                                    indicator={(
                                        <Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />
                                    )}
                                    name="select"
                                    placeholder="Select"
                                    options={dropdownOptions}
                                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <Heading as="h4" className="text-gray-700">
                                    Address
                                </Heading>
                                <SelectBox
                                    shape="round"
                                    indicator={(
                                        <Img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />
                                    )}
                                    name="address"
                                    placeholder="Select"
                                    options={dropdownOptions}
                                    className="self-stretch border border-solid border-grey_100 sm:pr-5"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="https://www.youtube.com/embed/vp8fVkoZZl7" target="_blank" rel="noreferrer">
                                <Button
                                    color="orange_900"
                                    shape="round"
                                    rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                                    className="white_A700_33 white_A700_33_border w-full gap-4 border border-solid font-medium sm:px-5"
                                >
                                    Next
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
                    <div className="w-[12px] w-[20px] rounded-[20px] bg-black-900_01" />
                    <div className="w-[52px] flex-1 rounded-[20px] bg-gray-300 md:self-stretch" />
                </div>
                <div className="flex w-[34%] flex-col gap-[26px] md:w-full">
                    <div className="w-[52px] rounded-[20px] bg-gray-300" />
                    <div className="w-[52px] rounded-[20px] bg-gray-300" />
                </div>
            </div>
        </>
    );
}
