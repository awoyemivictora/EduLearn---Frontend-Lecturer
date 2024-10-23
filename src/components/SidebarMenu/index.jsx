import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Img, Heading } from "..";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";
import { fetchRandomImage } from "../../unsplashService.js";
import { faker } from "@faker-js/faker";
import {
  CaretRight,
  List,
  Student,
  CalendarCheck,
  Broadcast,
  FileText,
  DiamondsFour,
  ToggleLeft,
  Headset,
  SignOut,
  BookOpen,
  TrendUp,
  ChatsCircle,
  Users,
  BookmarksSimple,
  IdentificationBadge,
  Exam,
  ArrowRight,
  X,
  ArrowLineRight,
  Buildings,
} from "phosphor-react";
import { Link } from "react-router-dom";

export default function SidebarMenu({ className, ...props }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const [avatarUrl, setAvatarUrl] = useState("");
  const randomNumber = faker.datatype.number({ min: 10000000, max: 99999999 });
  const sidebarRef = useRef(null); // Reference for the sidebar element
  const defaultImageUrl = "/public/images/victor.jpg";

  useEffect(() => {
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
  }, []);

  // Function to toggle the sidebar when an icon is clicked
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative flex items-center">
      {/* Condititonally show icons when sidebar is closed */}

      {/* {!isOpen && (
        <div className="flex flex-col -space-y-4 items-center gap-20 px-4 sticky top-0">
        <button onClick={toggleSidebar} className="p-2 mt-10">
            <List size={18} />
          </button>

          <Link to="/register">
            <button className="p-2">
              <DiamondsFour size={18} />
            </button>
          </Link>

          <Link to="/academic-program-courses">
            <button className="p-2">
              <Student size={18} />
            </button>
          </Link>

          <Link to="/login">
            <button className="p-2">
              <CalendarCheck size={18} />
            </button>
          </Link>

          <Link to="/">
            <button className="p-2">
              <Broadcast size={18} />
            </button>
          </Link>

          <Link to="/">
            <button className="p-2">
              <FileText size={18} />
            </button>
          </Link>

          <Link to="/register">
            <button className="p-2">
              <Headset size={18} />
            </button>
          </Link>

          <Link to="/login">
            <button className="p-2">
              <SignOut size={18} />
            </button>
          </Link>

        </div>
      )} */}

      {/* Conditional sidebar rendering */}
      {/* {isOpen && ( */}
        <Sidebar
          ref={sidebarRef}
          {...props}
          width="274px !important"
          className={`${className} flex flex-col h-screen pt-4 top-0 px-4 bg-foundation-primary_color-p50-1 !sticky overflow-auto`}
        >
          <div className="self-stretch border-b border-solid border-grey_100">
            <div className="mb-4 flex items-center justify-center rounded-md border border-solid border-blue_gray_50 bg-foundation-primary_color-p50-1 px-2 py-3.5">
              <div className="flex flex-1 items-center gap-[7px]">
                <Buildings size={18} />

                <Heading as="p">Switch to EduHealth</Heading>
              </div>
              <button onClick={toggleSidebar}>
                {/* <List size={18} /> */}
                <ToggleLeft size={20} />
              </button>
            </div>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "8px",
                gap: "7px",
                backgroundColor: "#ffffff",
                color: "#808080",
                fontWeight: 500,
                fontSize: "13px",
                borderRadius: "6px",
                [`&:hover, &.ps-active`]: {
                  color: "#0d9f7e",
                  backgroundColor: "#e7f5f299 !important",
                  borderRadius: "7px",
                },
              },
            }}
            rootStyles={{ "&>ul": { gap: "4px" } }}
            className="mt-4 flex w-full flex-col self-stretch"
          >
            {/* Sidebar Menu Items */}
            <Link to="/dashboard">
            <MenuItem icon={<DiamondsFour size={18} />}>Dashboard</MenuItem>
            </Link>

            <SubMenu icon={<Student size={18} />} label="Academic Program">
              <div className="pl-3">
                <Link to="/academic-program-courses">
                  <MenuItem icon={<BookmarksSimple size={18} />}>
                    Courses
                  </MenuItem>
                </Link>

                <Link to="/academic-program-lectures">
                  <MenuItem icon={<Users size={18} />}>
                    Lectures and lessons
                  </MenuItem>
                </Link>

                <Link to="/academic-program-assignments">
                  <MenuItem icon={<FileText size={18} />}>Assignments</MenuItem>
                </Link>

                <Link to="/academic-program-discussion-forum">
                  <MenuItem icon={<ChatsCircle size={18} />}>
                    Discussion forum
                  </MenuItem>
                </Link>

                <Link to="/academic-program-progress-tracking">
                  <MenuItem icon={<TrendUp size={18} />}>
                    Progress tracking
                  </MenuItem>
                </Link>

                <Link to="/academic-program-achievements">
                  <MenuItem icon={<IdentificationBadge size={18} />}>
                    Certificates and achievements
                  </MenuItem>
                </Link>

                <Link to="/academic-program-exams">
                  <MenuItem icon={<Exam size={18} />}>
                    Quizzes and exams
                  </MenuItem>
                </Link>
              </div>
            </SubMenu>

            <Link to="/semester-calendar">
            <MenuItem icon={<CalendarCheck size={18} />}>
              Semester Calendar
            </MenuItem>
            </Link>

            <Link to="/live-events"><MenuItem icon={<Broadcast size={18} />}>Live Events</MenuItem></Link>
            <Link to="/resources"><MenuItem icon={<BookOpen size={18} />}>Resources</MenuItem></Link>
          </Menu>

          <div className="mt-14 flex flex-col gap-4 self-stretch">
            <div className="flex flex-col gap-4 rounded-[14px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-4 shadow-xs">
              <div className="flex items-start justify-center">
                <div className="flex flex-1 flex-col items-start gap-4 self-center">
                  <div className="flex flex-col items-center rounded-[20px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3">
                  <Student size={18} />

                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    <Heading as="p">Assignment</Heading>
                    <Heading
                      size="body_text_bold"
                      as="p"
                      className="w-full leading-[120%] text-grey_300"
                    >
                      SOS 103 has been updated and to be submitted today!
                    </Heading>
                  </div>
                </div>
                <X size={12} />
              </div>

              <div className="flex items-center">
                <Heading as="p">View</Heading>

                <ArrowRight size={12} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {/* <div className="flex items-center gap-2 rounded-md bg-foundation-primary_color-p50-1 px-2 py-2.5"> */}

              <Menu
                menuItemStyles={{
                  button: {
                    padding: "8px",
                    gap: "7px",
                    backgroundColor: "#ffffff",
                    color: "#808080",
                    fontWeight: 500,
                    fontSize: "13px",
                    borderRadius: "6px",
                    [`&:hover, &.ps-active`]: {
                      color: "#0d9f7e",
                      backgroundColor: "#e7f5f299 !important",
                      borderRadius: "7px",
                    },
                  },
                }}
                rootStyles={{ "&>ul": { gap: "4px" } }}
                className="mt-4 flex w-full flex-col self-stretch"
              >
                <Link to="/register"><MenuItem icon={<Headset size={18} />}>Support & Help</MenuItem></Link>
                <Link to="/login"><MenuItem icon={<SignOut size={18} />}>Logout</MenuItem></Link>
              </Menu>
            </div>
            <div className="border-t border-solid border-grey_100">
              <div className="flex items-center justify-between gap-5 rounded-md bg-foundation-primary_color-p50-1 p-2">
                <div className="flex w-[74%] items-center gap-2">
                  <Img
                    src={avatarUrl}
                    alt="Profile Image"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <Heading
                      size="subtitle_text_bold"
                      as="h6"
                      className="text-grey_300"
                    >
                      {faker.person.fullName()}
                    </Heading>
                    <Heading as="p">{randomNumber}</Heading>
                  </div>
                </div>
                <CaretRight size={12} />
              </div>
            </div>
          </div>
        </Sidebar>
      {/* )} */}
    </div>
  );
}

// Add PropTypes validation
SidebarMenu.propTypes = {
  className: PropTypes.string, // Validate className prop
};

//             {/* Sidebar Menu Items */}
//             <MenuItem icon={<HomeIcon />}>Dashboard</MenuItem>
//             <SubMenu icon={<ProgramIcon />} label="Academic Program">
//               <MenuItem icon={<CoursesIcon />}>Courses</MenuItem>
//               <MenuItem icon={<LecturesIcon />}>Lectures and lessons</MenuItem>
//               <MenuItem icon={<AssignmentsIcon />}>Assignments</MenuItem>
//               <MenuItem icon={<ForumIcon />}>Discussion forum</MenuItem>
//               <MenuItem icon={<ProgressIcon />}>Progress tracking</MenuItem>
//               <MenuItem icon={<CertificatesIcon />}>Certificates</MenuItem>
//             </SubMenu>
//           </Menu>
//         </Sidebar>
//       )}
//     </div>
//   );
// }

// function HomeIcon() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[12px] w-[12px]">
//       <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//     </svg>
//   );
// }

// // Define other icons similarly like HomeIcon
