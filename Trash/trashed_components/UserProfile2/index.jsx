import { Heading, Img, Text } from "../../components";
import React from "react";

export default function UserProfile2({
    courseTitle = "Applied mathematics",
    courseDescription = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    progressPercentage = "79%",
    userName = "Kayode Oyebola",
    userTitle = "Professor",
    resumeCourseText = "Resume Course",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center w-full px-4 py-[18px] border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}>
            <div className="flex w-full items-center justify-center">
                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col items-start">
                            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                                {courseTitle}
                            </Heading>
                            <Text as="p" className="w-full leading-[120%] !text-grey_200">
                                {courseDescription}
                            </Text>
                        </div>
                        <div className="flex items-center">
                            <div className="relative h-[10px] w-[52%] rounded-[5px] bg-foundation-primary_color-p50-0">
                                <div
                                    style={{ width: "80%" }}
                                    className="absolute h-full rounded-[5px] bg-foundation-primary_color-p300"
                                />
                            </div>
                            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                                {progressPercentage}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        <Img
                            src="images/img_ellipse_1_34x34.png"
                            alt="Image"
                            className="h-[34px] w-[34px] rounded-[16px] object-cover"
                        />
                        <div className="flex flex-1 flex-col items-start">
                            <Heading size="text3xl" as="p" className="!text-blue_gray-700">
                                {userName}
                            </Heading>
                            <Heading as="p">{userTitle}</Heading>
                        </div>
                    </div>
                    <Heading
                        size="text3xl"
                        as="p"
                        className="relative ml-[82px] self-end text-foundation-primary_color-p300 underline"
                    >
                        {resumeCourseText}
                    </Heading>
                </div>
            </div>
        </div>
    );
}
