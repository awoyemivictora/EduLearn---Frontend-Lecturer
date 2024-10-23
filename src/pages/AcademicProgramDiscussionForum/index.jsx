import { Helmet } from "react-helmet";
import { Heading, Img, Text, SearchBox } from "../../components";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import React, { Suspense, useState, useEffect } from "react";
import { CaretRight, DotsThreeVertical, PaperPlaneRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { fetchRandomImage } from "../../unsplashService.js";
import { ClassProfile } from "../../components";

const data = [
  {
    classTitle: "Johnson's Class",
    classDescription:
      "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    johnsonsclass: "images/img_chevronleft.svg",
  },
  {
    classTitle: "Johnson's Class",
    classDescription:
      "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    johnsonsclass: "images/img_chevronleft.svg",
  },
  {
    classTitle: "Johnson's Class",
    classDescription:
      "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    johnsonsclass: "images/img_chevronleft.svg",
  },
  {
    classTitle: "Johnson's Class",
    classDescription:
      "Learn the fundamentals of coding and problem-solving using popular programming languages.",
    johnsonsclass: "images/img_chevronleft.svg",
  },
];

export default function AcademicProgramDiscussionForum() {
  const [activeMenu, setActiveMenu] = useState("Discussion Forum");
  const [showPopUp, setShowPopUp] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const defaultImageUrl = "/public/images/victor.jpg";

  // Function to show the popup
  const handlePopUp = () => {
    setShowPopUp(true);
  };

  // Function to update the active button
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Helmet>
        <title>EduLearn</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="bg-gray_50_01">
        <div className="mb-[60px] flex items-start">
          <SidebarMenu />
          <div className="flex flex-1 flex-col gap-9 self-center">
            <Header />
            <div className="ml-3.5 mr-[34px] md:mx-0">
              <div className="flex flex-col items-start gap-6">
                <Heading
                  size="subtitle_text_2_bold"
                  as="h1"
                  className="text-grey_300"
                >
                  Academic Program
                </Heading>

                <div className="flex items-start gap-3.5 self-stretch md:flex-col">
                  <div className="w-[28%] md:w-full md:p-5">
                    <div className="flex flex-col items-start gap-3 rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3.5">
                      <Heading as="h2">Menu</Heading>

                      <div className="mb-[158px] flex flex-col gap-2 self-stretch">
                        {/* Step 2: Apply dynamic border class based on the active state */}

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Courses"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Courses")}
                        >
                          <Link
                            to="/academic-program-courses"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Courses"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Courses
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Lectures and Lessons"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() =>
                            handleMenuClick("Lectures and Lessons")
                          }
                        >
                          <Link
                            to="/academic-program-lectures"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Lectures and Lessons"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Lectures and Lessons
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Assignments"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Assignments")}
                        >
                          <Link
                            to="/academic-program-assignments"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Assignments"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Assignments
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Discussion Forum"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Discussion Forum")}
                        >
                          <Link
                            to="/academic-program-discussion-forum"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Discussion Forum"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Discussion Forum
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Progress Tracking"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Progress Tracking")}
                        >
                          <Link
                            to="/academic-program-progress-tracking"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Progress Tracking"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Progress Tracking
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Certificates and Achievements"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() =>
                            handleMenuClick("Certificates and Achievements")
                          }
                        >
                          <Link
                            to="/academic-program-achievements"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Certificates and Achievements"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Certificates and Achievements
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className={`flex items-center justify-between gap-5 rounded-md px-2 py-2.5 ${
                            activeMenu === "Quizzes and Exams"
                              ? "border border-solid border-foundation-primary_color-p300 bg-foundation-primary_color-p50-1"
                              : "bg-foundation-primary_color-p50-1"
                          }`}
                          onClick={() => handleMenuClick("Quizzes and Exams")}
                        >
                          <Link
                            to="/academic-program-exams"
                            className={`flex items-center w-full h-full ${
                              activeMenu === "Courses"
                                ? "!text-foundation-primary_color-p300"
                                : ""
                            }`}
                          >
                            <Heading
                              as="h3"
                              className={`${
                                activeMenu === "Quizzes and Exams"
                                  ? "!text-foundation-primary_color-p300"
                                  : ""
                              }`}
                            >
                              Quizzes and Exams
                            </Heading>
                            <CaretRight size={12} />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 md:self-stretch md:p-5">
                    <div className="rounded-[10px] border border-solid border-grey_100 bg-foundation-primary_color-p50-1 px-[22px] py-6 sm:p-5">
                      <div className="flex flex-col items-start gap-4">
                        <Heading as="p">Forums</Heading>
                      </div>

                      <div className="flex items-start gap-6 self-stretch md:flex-col">
                        <div className="flex w-[36%] flex-col gap-2 md:w-full">
                          <div className="flex flex-col gap-4">
                            <Suspense>
                              {data.map((d, index) => (
                                <ClassProfile
                                  {...d}
                                  key={"lilstjohnsoncla" + index}
                                />
                              ))}
                            </Suspense>
                          </div>
                        </div>

                        <div className="flex-1 self-center md:self-stretch">
                          <div className="flex items-center justify-center gap-[22px] sm:flex-col">
                            <div className="h-full w-px bg-blue_gray-50_01 sm:h-px sm:w-full" />
                            <div className="flex-1 sm:self-stretch">
                              <div className="flex justify-center border-b border-solid border-blue_gray-50 p-2">
                                <div className="flex flex-1 flex-col items-startt">
                                  <Heading
                                    size="text3xl"
                                    as="p"
                                    className="!text-grey_300"
                                  >
                                    Johnson&rsquo;s Class
                                  </Heading>
                                  <Text as="p" className="!text-grey_200">
                                    Learn the fundamentals of coding and
                                    problem-solving using popular programming
                                    languages.
                                  </Text>
                                </div>

                                <div>
                                  <div
                                    onClick={handlePopUp}
                                    className="relative flex items-center justify-center rounded-full border border-solid border-grey_100 bg-foundation-primary_color-p50-1 p-3 w-[40px] h-[40px]"
                                  >
                                    <DotsThreeVertical size={18} />
                                  </div>

                                  {/* {showPopUp && <UserProfile /> } */}
                                </div>
                              </div>

                              <div className="mt-4 flex gap-2 w-full">
                                {/* Receiver's Avatar */}
                                <Img
                                  src={avatarUrl}
                                  alt="Thumbsup"
                                  className="h-[40px] w-[40px] rounded-full object-cover"
                                />

                                {/* Receiver's message */}
                                <div className="flex flex-col items-start flex-grow gap-1">
                                  <Heading as="p" className="!text-grey_300">
                                    John Kayode
                                  </Heading>
                                  <div className="flex w-[75%] sm:w-[58%] md:w-[70%] justify-center rounded-md border border-solid border-blue_gray-50 bg-white p-3 shadow-md">
                                    <Text
                                      size="textxl"
                                      as="p"
                                      className="w-full leading-snug !text-blue_gray-700 break-words"
                                    >
                                      I am having issues with logging to take my
                                      couurse, any help you can render here for
                                      me?
                                    </Text>
                                  </div>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="!text-grey_200 text-left"
                                  >
                                    9:15 am
                                  </Text>
                                </div>
                              </div>

                              <div className="mt-4 flex gap-2 w-full">
                                {/* Sender's message */}
                                <div className="flex flex-col items-end flex-grow gap-1">
                                  <Heading as="p" className="!text-grey_300">
                                    Awoyemi Victor A.
                                  </Heading>
                                  <div className="flex w-[75%] sm:w-[58%] md:w-[70%] justify-center rounded-md border border-solid border-blue_gray-50 bg-white p-3 shadow-md">
                                    <Text
                                      size="textxl"
                                      as="p"
                                      className="w-full leading-snug !text-blue_gray-700 break-words"
                                    >
                                      I was having same issues too, you can try
                                      tomorrow it is going to work
                                      properly......
                                    </Text>
                                  </div>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="!text-grey_200 text-right"
                                  >
                                    9:15 am
                                  </Text>
                                </div>
                                {/* Sender's Avatar */}
                                <Img
                                  src="/public/images/victor.jpg"
                                  alt="Sender Avatar"
                                  className="h-[40px] w-[40px] rounded-full object-cover"
                                />
                              </div>

                              <div className="mt-4 flex gap-2 w-full">
                                {/* Receiver's Avatar */}
                                <Img
                                  src={avatarUrl}
                                  alt="Thumbsup"
                                  className="h-[40px] w-[40px] rounded-full object-cover"
                                />

                                {/* Receiver's message */}
                                <div className="flex flex-col items-start flex-grow gap-1">
                                  <Heading as="p" className="!text-grey_300">
                                    John Kayode
                                  </Heading>
                                  <div className="flex w-[75%] sm:w-[58%] md:w-[70%] justify-center rounded-md border border-solid border-blue_gray-50 bg-white p-3 shadow-md">
                                    <Text
                                      size="textxl"
                                      as="p"
                                      className="w-full leading-snug !text-blue_gray-700 break-words"
                                    >
                                      Alright, thank you so much for this
                                      information
                                    </Text>
                                  </div>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="!text-grey_200 text-left"
                                  >
                                    9:15 am
                                  </Text>
                                </div>
                              </div>

                              <div className="mt-6 flex justify-between items-center gap-2 w-full">
                                <SearchBox
                                  size="md"
                                  shape="round"
                                  name="message"
                                  placeholder={`Enter your message...`}
                                  className="flex-grow border sm:pr-5"
                                />
                                <div className="flex items-center justify-center gap-2 rounded-md border border-solid border-grey-100 bg-foundation-primary_color-p300 p-3 shadow-xl transition-transform hover:scale-105 focus:outline-none">
                                  <Heading
                                    as="p"
                                    className="!text-foundation-primary_color-p50-1"
                                  >
                                    Send
                                  </Heading>
                                  <PaperPlaneRight
                                    size={16}
                                    className="!text-foundation-primary_color-p50-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
