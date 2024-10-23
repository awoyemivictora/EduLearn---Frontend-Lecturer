import { Text, Img, Heading } from "../../components";
import React from "react";
import PropTypes from "prop-types";


export default function UserProfile6({
  appliedText = "Applied mathematics",
  timeText = "3:00 PM - 4:30 PM",
  viewDetailsText = "View details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-full gap-1 py-3.5 border-grey_100 border border-solid bg-foundation-primary_color-p50-0 rounded-[10px]`}
    >
      <div className="flex flex-col gap-4 self-stretch">
        <div className="flex flex-col items-start">
          <Heading
            size="text3xl"
            as="p"
            className="!text-foundation-primary_color-p400"
          >
            {appliedText}
          </Heading>
          <Text as="p" className="!text-foundation-primary_color-p400">
            {timeText}
          </Text>
        </div>
        <Img
          src="images/img_frame_23.png"
          alt="Image"
          className="h-[34px] w-[56%] object-cover"
        />
      </div>
      <Text
        size="textxl"
        as="p"
        className="mr-2.5 !font-medium !text-foundation-primary_color-p300 underline"
      >
        {viewDetailsText}
      </Text>
    </div>
  );
}

UserProfile6.displayName = "UserProfile6";

UserProfile6.propTypes = {
    appliedText: PropTypes.string,
    timeText: PropTypes.string,
    viewDetailsText: PropTypes.string,
    className: PropTypes.string,
}







// import { Text, Img, Heading } from "../../components";
// import React from "react";
// import PropTypes from "prop-types";


// export default function UserProfile6({
//   appliedText = "Applied mathematics",
//   timeText = "3:00 PM - 4:30 PM",
//   viewDetailsText = "View details",
//   ...props
// }) {
//   return (
//     <div
//       {...props}
//       className={`${props.className} flex flex-col items-end w-full gap-1 py-4 border-grey_100 border border-solid bg-foundation-primary_color-p50-0 rounded-[10px]`}
//     >
//       <div className="flex flex-col gap-4 w-full">
//         <div className="flex flex-col items-start">
//           <Heading
//             size="text3xl"
//             as="p"
//             className="!text-foundation-primary_color-p400"
//           >
//             {appliedText}
//           </Heading>
//           <Text as="p" className="!text-foundation-primary_color-p400">
//             {timeText}
//           </Text>
//         </div>
//         <Img
//           src="images/img_frame_23.png"
//           alt="Image"
//           className="h-[34px] w-[100%] object-cover"
//         />
//       </div>
//       <Text
//         size="textxl"
//         as="p"
//         className="!font-medium !text-foundation-primary_color-p300 underline"
//       >
//         {viewDetailsText}
//       </Text>
//     </div>
//   );
// }

// UserProfile6.displayName = "UserProfile6";

// UserProfile6.propTypes = {
//     appliedText: PropTypes.string,
//     timeText: PropTypes.string,
//     viewDetailsText: PropTypes.string,
//     className: PropTypes.string,
// }