import { Button, Img, Heading } from "../../components";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function PictureUpload({ onNext, onBack, formik }) {
  const [profileImage, setProfileImage] = useState(
    "images/img_ellipses_746.png",
  ); // Default placeholder image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Convert file to basee64 string
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-1 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      {/* Form Container */}
      <div className="flex flex-col items-center gap-2">
        <Img
          src="images/img_logo.png"
          alt="Logo"
          className="h-20 w-50 object-contain"
        />
      </div>

      <h2
        className="text-center text-2xl mb-4 mt-3 text-white !important"
        style={{ color: "white" }}
      >
        Profile Image
      </h2>
      <Heading
        as="h2"
        className="text-white text-center mb-4 font-normal"
        style={{ color: "white" }}
      >
        Upload a profile picture
      </Heading>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-2.5 rounded-2.5 rounded-[12px] border border-solid border-white-a700_63 bg-white-a700_28 p-4">
          <Img
            src={profileImage} // Display the selected image or placeholder
            alt="Profile"
            className="h-[54px] w-[18%] rounded-[26px] object-contain"
            // className="h-full w-full rounded-[26px] object-contain"
          />
          <div className="flex flex-1 flex-col items-start gap-2 self-center">
            <Heading
              size="headingmd"
              as="h3"
              className="text-[13px] font-semibold text-foundation-primary_color-p50-1"
              style={{ color: "white" }}
            >
              Profile Picture
            </Heading>
            <Heading
              as="h4"
              className="text-[13px] font-normal tetxt-foundation-primary_color-p50-1"
              style={{ color: "white" }}
            >
              Min 400x400px, PNG or JPEG
            </Heading>

            <label htmlFor="profileImageUpload">
              <Button
                size="md"
                shape="round"
                className="min-w-[108px] bg-foundation-primary_color-p50-1 hover:bg-foundation-primary_color-p300 hover:text-foundation-primary_color-p50-1 rounded-md border border-solid border-gray-300_01 px-[9px] font-medium shadow-xs"
                onClick={() =>
                  document.getElementById("profileImageUpload").click()
                } // Trigger the file image input
              >
                Change Image
              </Button>
            </label>
            <input
              id="profileImageUpload"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none" }} // Hidden file input field
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2"
            style={{ color: "white" }}
            rightIcon={
              <Img
                src="images/img_chevron-right.svg"
                alt="Arrow Right"
                className="h-[12px] w-[12px]"
              />
            }
            // onClick={formik.handleSubmit} // Use handleNext to validate before proceeding
            onClick={onNext} // Use handleNext to validate before proceeding
            type="submit"
            disabled={formik.isSubmitting} // Optionally disable the button while submitting
          >
            Create Account
          </Button>

          <Button
            className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
            leftIcon={
              <Img
                src="images/img_chevronleft.svg"
                alt="Chevron-left"
                className="h-[12px] w-[12px]"
              />
            }
            onClick={onBack}
            type="button"
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation for better type safety
PictureUpload.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      confirm_password: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    touched: PropTypes.shape({
      email: PropTypes.bool,
      username: PropTypes.bool,
      password: PropTypes.bool,
      confirm_password: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.shape({
      email: PropTypes.string,
      username: PropTypes.string,
      password: PropTypes.string,
      confirm_password: PropTypes.string,
    }).isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  }).isRequired,
};
