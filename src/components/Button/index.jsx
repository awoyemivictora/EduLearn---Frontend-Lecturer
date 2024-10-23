// import React from "react";
// import PropTypes from "prop-types";

// const shapes = {
//   circle: "rounded-[50%]",
//   round: "rounded-md",
// };

// const variants = {
//   blue_900: "bg-blue-900 text-foundation-primary_color-p50-1",
//   red_500: "bg-red-500",
//   teal_500_11: "bg-teal-500_11 shadow-xs text-foundation-primary_color-p300",
//   green_500_33: "bg-green-500_13 text-green-500",
//   foundation__primary_color_p500_0: "bg-foundation-primary_color-p50-0 text-blue_gray-300_01",
//   orange_900: "bg-orange-900 shadow-6xl text-foundation-primary_color-p50-1",
//   foundation__primary_color_p300: "bg-foundation-primary_color-p3000 shadow-xl text-foundation-primary_color-p50-1",
//   foundation__primary_color_p50_1: "bg-foundation-primary_color-p50-1",
// };


// const sizes = {
//     "2xl": "h-[68px] px-1.5 text-[8px]",
//     "3xl": "h-[92px] px-1.5 text-[8px]",
//     xs: "h-[20px] px-1.5 text-[13px]",
//     md: "h-[36px] px-2.5 text-[13px]",
//     sm: "h-[30px] px-3 text-[13px]",
//     lg: "h-[40px] px-3",
//     xl: "h-[40px] px-[34px] text-[13px]",
// }


// const Button = ({
//     children,
//     className = "",
//     leftIcon,
//     rightIcon,
//     shape,
//     variant = "foundation__prirmary_color_p50_1", // Default to a variant
//     size= "xl",
//     ariaLabel,
//     ...restProps
// }) => {
//     return (
//         <button
//         className={`${className} flex items-center justify-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(sizes[size]) || ""} ${(variants[variant]) || ""}`}
//         aria-label={ariaLabel || (typeof children === "string" ? children : "")} // Accessibility
//         {...restProps}
//         > 
//             {!!leftIcon && <span className="mr-2">{leftIcon}</span>}
//             {children}
//             {!!rightIcon && <span className="ml-2">{rightIcon}</span>}
//         </button>
//     );
// };


// Button.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.node.isRequired, // Ensure button has content
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     shape: PropTypes.oneOf(["circle", "round"]),
//     size: PropTypes.oneOf(["2xl", "3xl", "xs", "md", "sm", "lg", "xl"]),
//     variant: PropTypes.oneOf([
//         "blue_900",
//         "red_500",
//         "teal_500_11",
//         "green_500_33",
//         "foundation__primary_color_p50_0",
//         "orange_900",
//         "foundation__primary_color_p300",
//         "foundation__primary_color_p50_1",
//     ]),
//     ariaLabel: PropTypes.string, // For better accessibility with icon  buttons

// };


// export default Button;


import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-md",
};

const variants = {
  blue_900: "bg-blue-900 text-foundation-primary_color-p50-1",
  red_500: "bg-red-500",
  teal_500_11: "bg-teal-500_11 shadow-xs text-foundation-primary_color-p300",
  green_500_33: "bg-green-500_13 text-green-500",
  foundation__primary_color_p500_0: "bg-foundation-primary_color-p50-0 text-blue_gray-300_01",
  orange_900: "bg-orange-900 shadow-6xl text-foundation-primary_color-p50-1",
  foundation__primary_color_p300: "bg-foundation-primary_color-p3000 shadow-xl text-foundation-primary_color-p50-1",
  foundation__primary_color_p50_1: "bg-foundation-primary_color-p50-1",
};


const sizes = {
    "2xl": "h-[68px] px-1.5 text-[8px]",
    "3xl": "h-[92px] px-1.5 text-[8px]",
    xs: "h-[20px] px-1.5 text-[13px]",
    md: "h-[36px] px-2.5 text-[13px]",
    sm: "h-[30px] px-3 text-[13px]",
    lg: "h-[40px] px-3",
    xl: "h-[40px] px-[34px] text-[13px]",
}


const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size= "xl",
    color = "foundation__primary_color_p50_1",
    ...restProps
}) => {
    return (
        <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
        {...restProps}
        > 
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};


Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round"]),
    size: PropTypes.oneOf(["2xl", "3xl", "xs", "md", "sm", "lg", "xl"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf([
        "blue_900",
        "red_500",
        "teal_500_11",
        "green_500_33",
        "foundation__primary_color_p50_0",
        "orange_900",
        "foundation__primary_color_p300",
        "foundation__primary_color_p50_1",
    ]),
};


export default Button;


