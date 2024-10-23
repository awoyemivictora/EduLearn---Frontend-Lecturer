import React from "react";
import PropTypes from "prop-types";

const HeaderSearchBar = ({
  isOnline,
  avatarUrl = "images/default_avatar.png",
}) => {
  return (
    <div className="flex items-center bg-white p-4 shadow-md">
      {/* Avatar with online/offline indicator */}
      <div className="relative flex items-center mr-4">
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />

        <span
          className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${isOnline ? "bg-green-500" : "bg-gray-400"}`}
        ></span>
      </div>

      {/* Search bar */}
      <div className="flex flex-grow items-center bg-gray-1000 rounded-md p-2">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search bar"
          className="bg-transparent flex-grow px-2 text-gray-700 outline-none"
        />
        <svg
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          aria-label="Search icon"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

// Define prop types for validation
HeaderSearchBar.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string,
}

// Set default props
HeaderSearchBar.defaultProps = {
  avatarUrl: "images/default_avatar.png",
}

export default HeaderSearchBar;
