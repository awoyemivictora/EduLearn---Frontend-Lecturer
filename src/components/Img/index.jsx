import React from "react";
import PropTypes from "prop-types";


const Img = ({ className, src = "defaultNoData.png", alt = "Image", ...restProps }) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            {...restProps}
            loading={"lazy"} // Ensure lazy loading
            onError={(e) => {
                // Fallback to default image if the provided src fails to load
                e.target.onerror = null;
                e.target.src = "defaultNoData.png";
            }}
        />
    );
};


// Adding PropTypes validation
Img.propTypes = {
    className: PropTypes.string, // className should be string
    src: PropTypes.string, // Ensure src is provided
    alt: PropTypes.string, // Ensure alt is provided
};


export default Img;


