import React, { useState } from "react";
import PropTypes from "prop-types";


const ProfileImageUpload = ({ onUpload }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 500 file size limit
    const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
            setErrorMessage("File size exceeds 5MB limit.");
            return;
        }

        // Validate file type
        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
            setErrorMessage("Unsupported file format. Please upload JPEG, PNG, or GIF.");
            return;
        }

        setErrorMessage(null); // Clear previous errors

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            onUpload(file);
        };

        reader.onerror = () => {
            setErrorMessage("Error uploading the image. Please try again.")
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        onUpload(null); // Optionally notify parennt component of removal
    };


    return (
        <div className="mb-4 text-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">
                Profile Picture
            </label>

            {/* Image Preview */}
            <div className="mb-4">
                {imagePreview ? (
                    <img src={imagePreview} alt="Selected profile preview" className="rounded-full w-24 h-24 mx-auto" />
                ) : (
                    <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">No Image</span>
                    </div>
                )}
            </div>

            {/* File Input */}
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="profileImage" />
            <label htmlFor="profileImage" className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded">
                {imagePreview ? "Change Image" : "Upload Image"}
            </label>

            {/* Remove Image Button */}
            {imagePreview && (
                <button onClick={handleRemoveImage} className="block mt-2 text-red-500 underline">
                    Remove Image
                </button>
            )}

            {/* Error Message */}
            {errorMessage && (
                <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
            )}
        </div>
    );
};


ProfileImageUpload.propTypes = {
    onUpload: PropTypes.func.isRequired,
};


export default ProfileImageUpload;



