import { Text } from "../../components";
import React from "react";

export default function UserProfile({ activeCoursesText = "Active courses", percentageText = "24%", ...props }) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
            <div className="flex flex-1 items-center">
                <div className="h-[10px] w-[10px] rounded-[5px] bg-foundation-primary_color-p300" />
                <Text size="textxl" as="p" className="!text-blue_gray-700">
                    {activeCoursesText}
                </Text>
            </div>
            <Text size="textxl" as="p" className="!text-grey_300">
                {percentageText}
            </Text>
        </div>
    );
}
