import { Text } from "./..";
import React from "react";
import PropTypes from "prop-types";


export default function NinConfirmationProps({ firstNameLabel = "First name", firstNameValue = "Folasayo", ...props }) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center flex-1`}>
            <div className="flex flex-1 px-2">
                <Text size="text2xl" as="p" className="font-generarlsans text-[12px] font-medium text-blue_gray-600">
                    {firstNameLabel}
                </Text>
            </div>
            <div className="flex px-2">
                <Text size="text2xl" as="p" className="self-end font-generalsans text-[12px] font-medium text-secondary_300-0">
                    {firstNameValue}
                </Text>
            </div>
        </div>
    );
}

NinConfirmationProps.propTypes = {
    firstNameLabel: PropTypes.string,
    firstNameValue: PropTypes.string,
    className: PropTypes.string,
}