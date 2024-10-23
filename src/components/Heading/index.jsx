import React from "react";
import PropTypes from "prop-types";

const sizes = {
  subtitle_text_2_bold: "text-[19px] font-bold",
  body_text_bold: "text-[13px] font-bold",
  subtitle_text_bold: "text-base font-bold",
  h2_bold: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  label_bold: "text-[11px] font-bold",
  textlg: "text-[10px] font-medium",
  text2xl: "text-[13px] font-medium",
  text3xl: "text-sm font-medium lg:text-3xl sm:text-xl", // added lg & sm for dashboard (will change back later if it breakes any of my code)
  text4xl: "text-base font-medium",
  headingxs: "text-[10px] font-bold",
  headings: "text-xs font-semibold",
  headingmd: "text-[13px] font-semibold",
  headinglg: "text-sm font-bold",
  headingxl: "text-2xl font-semibold md:text-[22px]",
  heading2xl: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
};

const Heading = ({
  children,
  className = "",
  size = "text2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-grey_200 font-roboto ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Define prop types
Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)), // Restrict size to the keys of the sizes object
  as: PropTypes.string,
};

export default Heading;
