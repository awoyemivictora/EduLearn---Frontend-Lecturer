// import { Heading, Img } from "../../components";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { faker } from "@faker-js/faker";
// import { fetchRandomImage } from "../../unsplashService.js";

// export default function UserProfile4({
//   bestPerformingText = "Best performing student 2024",
//   userDepartment = "Computer Science",
//   ...props
// }) {
//   const [avatarUrl, setAvatarUrl] = useState("");
//   const defaultImageUrl = "/public/images/victor.jpg";

//   useEffect(() => {
//     // Generate a random image by fetching from Unsplash and if null, it defaults to my image
//     const loadRandomImage = async () => {
//       try {
//         const imageUrl = await fetchRandomImage();
//         // Chheck if imageUrl is null, undefined or if it has an error
//         setAvatarUrl(imageUrl || defaultImageUrl);
//       } catch (error) {
//         // If thehre's an error, fall back to the default image
//         console.error("Failed to fetch image:", error);
//         setAvatarUrl(defaultImageUrl);
//       }
//     };
//     loadRandomImage();
//   }, []);

//   return (
//     <div
//       {...props}
//       className={`${props.className} flex flex-col items-center w-full gap-4 p-6 sm:p-5 border-grey_100 border border-solid bg-foundation-primary_color-p50-1 rounded-[10px]`}
//     >
//       <Heading as="p" className="text-gray-600">{bestPerformingText}</Heading>

//       {/* Badge Container */}
//       <div className="relative mx-2 h-[158px] w-[68%]">
//         <Img src="/home/awoyemivictora/Python/EduLearn---Frontend/public/images/img_star_1.svg" alt="Image" className="h-[158px] w-full" />
//         <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-[72%] rounded-[56px] border-4 border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1 p-2.5">
//           <Img
//             src={avatarUrl}
//             alt="Image"
//             className="h-[94px] w-[94px] rounded-[46px] object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-center gap-1">
//         <Heading size="subtitle_text_bold" as="h6" className="!text-grey_300">
//           {faker.internet.userName()}
//         </Heading>
//         <Heading as="p">{userDepartment}</Heading>
//       </div>
//     </div>
//   );
// }

// // PropTypes validation
// UserProfile4.propTypes = {
//   bestPerformingText: PropTypes.string,
//   userName: PropTypes.string,
//   userDepartment: PropTypes.string,
//   className: PropTypes.string,
// };




import { Heading, Img } from "../../components";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import { fetchRandomImage } from "../../unsplashService.js";

export default function UserProfile4({
  bestPerformingText = "Best performing student 2024",
  userDepartment = "Computer Science",
  ...props
}) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/victor.jpg";

  useEffect(() => {
    const loadRandomImage = async () => {
      try {
        const imageUrl = await fetchRandomImage();
        setAvatarUrl(imageUrl || defaultImageUrl);
      } catch (error) {
        console.error("Failed to fetch image:", error);
        setAvatarUrl(defaultImageUrl);
      }
    };
    loadRandomImage();
  }, []);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-4 p-6 sm:p-5 border-grey_100 border border-solid bg-white rounded-[10px]`}
    >
      <Heading as="p" className="text-gray-600">{bestPerformingText}</Heading>

      {/* Badge with SVG */}
      <div className="relative w-[158px] h-[158px] flex justify-center items-center">
      <svg
          width="158"
          height="158"
          viewBox="0 0 158 158"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <path d="M79 0L85.2522 9.61218L93.1202 1.27084L97.5556 11.8449L106.787 5.04253L109.263 16.2386L119.56 11.1938L119.997 22.6521L131.03 19.527L129.414 30.8792L140.827 29.7743L137.21 40.6556L148.637 41.6063L143.135 51.6669L154.209 54.6427L147 63.5592L157.364 68.4645L148.678 75.9504L158 82.6276L148.117 88.4422L156.097 96.6766L145.335 100.633L151.716 110.16L140.42 112.131L144.998 122.644L133.531 122.567L136.158 133.729L124.89 131.605L125.482 143.056L114.774 138.955L113.311 150.328L103.508 144.38L100.038 155.31L91.454 147.707L86.0886 157.841L79 148.828L71.9114 157.841L66.546 147.707L57.9619 155.31L54.4922 144.38L44.6886 150.328L43.2262 138.955L32.5181 143.056L33.1099 131.605L21.8416 133.729L24.4686 122.567L13.0022 122.644L17.58 112.131L6.28405 110.16L12.6655 100.633L1.90303 96.6766L9.88297 88.4422L-4.58225e-05 82.6276L9.32196 75.9504L0.636017 68.4645L11.0005 63.5592L3.79077 54.6427L14.8645 51.6669L9.3628 41.6063L20.79 40.6556L17.173 29.7743L28.5863 30.8792L26.9704 19.527L38.003 22.6521L38.4401 11.1938L48.7374 16.2386L51.2134 5.04253L60.4444 11.8449L64.8798 1.27084L72.7478 9.61218L79 0Z"
          fill="#36AF94"
          />
        </svg>

        {/* Profile Image (Centered) */}
        <div className="relative z-10 w-[94px] h-[94px] bg-white rounded-full border-4 border-solid border-green-300">
          <Img
            src={avatarUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Username and Department */}
      <div className="flex flex-col items-center gap-1">
        <Heading size="subtitle_text_bold" as="h6" className="!text-gray-700">
          {faker.internet.userName()}
        </Heading>
        <Heading as="p" className="text-gray-500">{userDepartment}</Heading>
      </div>
    </div>
  );
}

// PropTypes validation
UserProfile4.propTypes = {
  bestPerformingText: PropTypes.string,
  userName: PropTypes.string,
  userDepartment: PropTypes.string,
  className: PropTypes.string,
};
