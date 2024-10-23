import { Img, Heading } from "../../components";
import React from "react";

export default function UserProfile5({ coursesInProgressText = "Courses in progress", ...props }) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-[48%] sm:w-full gap-[52px] px-3.5 py-4 sm:gap-[26px] border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}>
            <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="h-[32px] w-[32px] rounded-[16px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 shadow-md" />
                <Heading as="p">{coursesInProgressText}</Heading>
            </div>
            <Img src="images/img_frame_1310.svg" alt="Image" className="h-[30px] w-full" />
        </div>
    );
}
