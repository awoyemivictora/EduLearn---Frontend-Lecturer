import { Button, Img, SelectBox, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";


const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function RegisterFour({ isOpen, ...props }) {
    return (
        <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1280px]">
            <div className="flex w-full min-w-[1280px] flex-col items-center justify-center rounded-[28px] bg-white-a700_33 px-14 py-16 md:p-5">
                <div className="flex w-[28%] flex-col items-center gap-8 md:w-full">
                    <div className="h-[68px] w-[68px] rounded-[34px] bg-foundation-primary_color-p50-1" />
                        <div className="flex flex-col items-center gap-1 self-stretch">
                            <Heading size="subtitle_text_2_bold" as="h1" className="!text-foundation-primary_color-p50-1">
                                Address Details
                            </Heading>
                            <Heading as="h2" className="self-stretch text-center leading-[120%] !text-foundation-primary_color-p50-0">
                                Share your current address to help us keep you informed about campus updates and relevant announcements
                            </Heading>
                        </div>
                        <div className="flex flex-col gap-8 self-stretch">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col items-start gap-1">
                                    <Heading as="h2" className="!text-foundation-primary_color-p50-0">
                                        Country
                                    </Heading>
                                    <SelectBox 
                                        shape="round"
                                        indicator={<img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                                        name="country"
                                        placeholder={`Select `}
                                        options={dropDownOptions}
                                        className="self-stretch border border-solid border-grey_100 sm:pr-5"
                                    />
                                    <div className="flex flex-col items-start gap-1">
                                        <Heading as="h3" className="!text-foundation-primary_color-p50-0">
                                            State
                                        </Heading>
                                        <SelectBox 
                                            shape="round"
                                            indicator={<img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                                            name="Select"
                                            placeholder={`Select `}
                                            options={dropDownOptions}
                                            className="self-stretch border border-solid border-grey_100 sm:pr-S"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-1">
                                        <Heading as="h4" className="!text-foundation-primary_color-p50-0">
                                            Address
                                        </Heading>
                                        <SelectBox 
                                            shape="round"
                                            indicator={<img src="images/img_chevronleft.svg" alt="Arrow Down" className="h-[12px] w-[12px]" />}
                                            name="address"
                                            placeholder={`Select `}
                                            options={dropDownOptions}
                                            className="self-stretch border border-solid border-grey_100 sm:pr-S"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            color="foundation__primary_color_p300"
                                            shape="round"
                                            rightIcon={<Img src="images/img_arrowright.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                                            className="white_A700_33_white_A700_33_border w-full gap-1 border border-solid font-medium sm:px-5"
                                        >
                                            Next
                                        </Button>
                                        <Button
                                            shape="round"
                                            leftIcon={<Img src="images/img_chevronleft.svg" alt="Chevron-left" className="h-[12px] w-[12px]" />}
                                            className="w-full gap-1 border border-solid border-gray-300_02 font-medium text-grey_200 shadow-xs sm:px-5"
                                        >
                                            Go back
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

        </ModalProvider>
    );
}





