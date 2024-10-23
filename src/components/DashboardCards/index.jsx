import { UserCircle, FolderSimple, ArrowFatUp } from "phosphor-react"; // For icons
import React, { Suspense, useState, useEffect } from "react";

// import { ReactComponent as WaveChart } from '/images/Vector.svg';

export default function DashboardCards() {
  const [coursePercentageA, setCoursePercentageA] = useState("0%");
  const [coursePercentageB, setCoursePercentageB] = useState("0%");
  const [progressPercentage, setProgressPercentage] = useState("79%"); // Default progress percentage

  useEffect(() => {
    // Function to generate random percentages for active and inactive courses
    const generateRandomCoursePercentages = () => {
      const randomCoursePercentageA = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100
      const randomCoursePercentageB = 100 - randomCoursePercentageA; // Complement to 100

      // Setting theh states
      setCoursePercentageA(`${randomCoursePercentageA}%`);
      setCoursePercentageB(`${randomCoursePercentageB}%`);
    };
    generateRandomCoursePercentages(); // Call the function when the component mounts

    // Generate a random percentage between 1 and 100
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    setProgressPercentage(`${randomPercentage}`);

    // Generate a random image by fetching from Unsplash and if null, it defaults to my image
    const loadRandomImage = async () => {
      try {
        const imageUrl = await fetchRandomImage();
        // Chheck if imageUrl is null, undefined or if it has an error
        setAvatarUrl(imageUrl || defaultImageUrl);
      } catch (error) {
        // If thehre's an error, fall back to the default image
        console.error("Failed to fetch image:", error);
        setAvatarUrl(defaultImageUrl);
      }
    };
    loadRandomImage();
  }, []); // Empty dependency array means it runds only once

  return (
    <div className="flex gap-4 justify-between w-full p-2">
      {/* First Card - Courses in Progress */}
      <div className="flex items-center pt-6 pl-6 pb-6 bg-white rounded-lg w-[48%] justify-between flex-1 border border-solid border-grey_100">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-left">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <UserCircle size={24} className="text-gray-700" />
            </div>

            {/* Text and Values below the icon */}
            <p className="text-gray-600 font-semibold text-xs mt-8">
              Courses in progress
            </p>

            <div className="flex items-center gap-2 mt-2">
              <h2 className="text-3xl font-bold">{progressPercentage}</h2>
              <div className="flex items-center text-green-500 text-xs font-medium bg-green-100 px-2 py-1 rounded-full">
                <ArrowFatUp size={12} />
                <span>{coursePercentageA}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Chart */}
        <img
          src="/images/Vector.svg"
          alt="Wave Chart"
          width="200"
          height="300"
        />
      </div>

      {/* Second Card - Active Prototypes */}
      <div className="flex items-center p-6 bg-white rounded-lg w-[48%] justify-between flex-1 border border-solid border-grey_100">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-left">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FolderSimple size={24} className="text-gray-700" />
            </div>

            {/* Text and Values below the icon */}
            <p className="text-gray-600 font-semibold text-xs mt-8">
              Active prototypes
            </p>

            <div className="flex items-center gap-2 mt-2">
              <h2 className="text-3xl font-bold">22</h2>
              <div className="flex items-center text-green-500 text-xs font-medium bg-green-100 px-2 py-1 rounded-full">
                <ArrowFatUp size={12} />
                <span>{coursePercentageB}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="ml-auto flex items-end h-full gap-2">
          <div className="h-24 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
          <div className="h-16 w-3 bg-[#0D9F7E] rounded-t"></div>
          <div className="h-8 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
          <div className="h-20 w-3 bg-[#0D9F7E] mx-1 rounded-t"></div>
          <div className="h-12 w-3 bg-[#E7F5F2] mx-1 rounded-t"></div>
        </div>
      </div>
    </div>
  );
}
