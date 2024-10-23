import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Heading, Button } from "./.."; // Ensure correct import paths

export default function MeetingSchedule({
    buttonLabel = "vc",
    meetingTitle = "Meeting with the VC",
    meetingTime = "10 A.M - 11 A.M",
    meetingLink = "www.zoom.com", // Default link value for meeting
    ...props
}) {
    return (
        <div
            {...props}
            className={`flex justify-center items-center p-2 bg-gray-100_02 flex-1 rounded-[5px] ${props.className}`}
        >
            <Button
                color="foundation__primary_color_p300"
                size="md"
                className="min-w-[36px] rounded-lg font-jost font-medium"
                aria-label={`Join ${meetingTitle}`} // Accessibility improvement
            >
                {buttonLabel}
            </Button>
            <div className="flex-1 self-end px-3">
                <div className="flex flex-col items-start">
                    <div className="flex items-start self-stretch">
                        <Heading size="headinglg" as="p" className="self-center !text-blue_gray-900_02">
                            {meetingTitle}
                        </Heading>
                        <div className="mb-1 ml-2 h-[6px] self-end rounded-[3px] bg-foundation-primary_color-p300" />
                        <Heading size="headingxs" as="p" className="ml-1 !text-blue_gray-400">
                            {meetingTime}
                        </Heading>
                    </div>
                    <Heading size="headingxs" as="p" className="!font-jost !text-foundation-primary_color-p300 underline">
                        <a href={`https://${meetingLink}`} target="_blank" rel="noopener noreferrer" className="font-roboto text-foundation-primary_color-p300">
                            Meeting link: {meetingLink}
                        </a>
                        <span className="font-roboto text-black-900_01">&nbsp; &nbsp;</span>
                        <span className="font-roboto text-deep_orange-a400">Due soon</span>
                    </Heading>
                </div>
            </div>
        </div>
    );
}

// PropTypes for validation
MeetingSchedule.propTypes = {
    buttonLabel: PropTypes.string,
    meetingTitle: PropTypes.string,
    meetingTime: PropTypes.string,
    meetingLink: PropTypes.string,
    className: PropTypes.string,
};
