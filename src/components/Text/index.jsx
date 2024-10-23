import React from "react";
import PropTypes from "prop-types";

const sizes = {
  label: "text-[11px] font-normal not-italic",
  body_text: "text-[13px] font-normal not-italic",
  textxs: "text-[7px] font-normal not-italic",
  texts: "text-[8px] font-normal not-italic",
  textmd: "text-[9px] font-normal not-italic",
  textxl: "text-xs font-normal not-italic",
  textlg: "text-lg font-normal not-italic",
  texthuge: "text-xl font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as = "p",
  size = "label",
  ...restProps
}) => {
  const Component = as;

  return (
    <Component
      className={`text-blue_gray-300_01 font-roboto ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Add a display name for debugging purposes
Text.displayName = "Text";

// Prop validation
Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default Text;
