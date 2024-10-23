import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
};

const variants = {
  outline: {
    grey_100: "border-grey_100 border-b border-solid",
  },
  fill: {
    foundation__primary_color_p50_1:
      "bg-foundation-primary_color-p50-1 text-grey_200",
  },
};

const sizes = {
  xs: "h-[32px] pl-3 pr-[34px] text-[11px]",
  md: "h-[62px] px-2 text-[13px]",
  sm: "h-[40px] pl-3 pr-[34px] text-[11px]",
};

const InputSendMessage = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "foundation__primary_color_p50_1",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        htmlFor={name}
        className={`${className} flex items-center justify-center cursor-text text-grey_200 border-grey_100 border-solid ${shape && shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} id={name} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

InputSendMessage.displayName = "InputSendMessage";

InputSendMessage.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["grey_100", "foundation__primary_color_p50_1"]),
};

export default InputSendMessage;
