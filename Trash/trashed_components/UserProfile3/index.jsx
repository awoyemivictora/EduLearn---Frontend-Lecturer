import { Text, Heading, Img } from "../../components";
import React from "react";

export default function UserProfile3({
    applied = "Applied mathematics",
    learnthe = "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    view = "View",
    userTitle = "Professor",
    userName = "Kayode David",
    duein = "Due in:",
    jan222024 = "Jan 22, 2024",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col justify-center w-full gap-4 px-4 py-5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}>
            <div className="flex items-center justify-between gap-5 self-stretch">
                <div className="flex flex-1 flex-col items-start">
                    <Heading size="text3xl" as="p" className="!text-grey_300">
                        {applied}
                    </Heading>
                    <Text as="p" className="!text-grey_200">
                        {learnthe}
                    </Text>
                </div>
                <div className="flex items-center gap-1">
                    <Heading as="p">{view}</Heading>
                    <Img src="images/img_chevronleft.svg" alt="view" className="h-[12px] w-[12px]" />
                </div>
            </div>
            <div className="flex justify-center gap-1 self-stretch">
                <Img
                    src="images/img_ellipse_1_34x34.png"
                    alt="Image"
                    className="h-[34px] w-[34px] rounded-[16px] object-cover"
                />
                <div className="flex flex-1 flex-col items-start">
                    <Heading as="p">{userTitle}</Heading>
                    <Heading size="text3xl" as="p" className="text-blue_gray-700">
                        {userName}
                    </Heading>
                </div>
            </div>
            <div className="flex justify-center self-stretch rounded-[5px] bg-red-50 p-1.5">
                <div className="flex flex-1 items-center">
                    <div className="h-[8px] w-[8px] rounded bg-red-500" />
                    <Text size="body_text" as="p" className="text-blue_gray-700">
                        {duein}
                    </Text>
                </div>
                <Text size="body_text" as="p" className="text-blue_gray-700">
                    {jan222024}
                </Text>
            </div>
        </div>
    );
}
