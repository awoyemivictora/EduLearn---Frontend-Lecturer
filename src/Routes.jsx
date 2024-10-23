import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Register from "pages/Register";
import RegisterOne from "pages/RegisterOne";
import RegisterTwo from "pages/RegisterTwo";
import RegisterThree from "pages/RegisterThree";
import TVOne from "pages/TVOne";
import TVTwo from "pages/TVTwo";
import TVThree from "pages/TVThree";
import Login from "pages/Login";
import RegisterFive from "pages/RegisterFive";
import ProfileSetupFour from "pages/ProfilesetupFour";
import ProfileSetupTwo from "pages/ProfilesetupTwo";
import ProfileSetupOne from "pages/ProfilesetupOne";
import HomeTwo from "pages/HomeTwo";
import HomeOne from "pages/HomeOne";
import AcademicProgram from "pages/AcademicProgramCourses";
import AcademicProgramFour from "pages/AcademicProgramProgressTracking";
import AcademicProgramThree from "pages/AcademicProgramDiscussionForum";
import AcademicProgramTwo from "pages/AcademicProgramTwo";
import AcademicProgramFive from "pages/AcademicProgramAchievements";
import AcademicProgramSix from "pages/AcademicProgramSix";
import AcademicProgramEight from "pages/AcademicProgramEight";
import AcademicProgramNine from "pages/AcademicProgramNine";
import AcademicProgramSeven from "pages/QuizzesAndExams";
import AcademicProgramTen from "pages/ExamSubmission";
import HomeThree from "pages/Home";
import HomeFour from "pages/SemesterCalendar";
import HomeFive from "pages/Dashboard";
import HomeSix from "pages/HomeSix";
import LiveEvents from "pages/LiveEvents";
import GeneralSignupOne from "pages/GeneralSignUpOne";
import GeneralSignupTwo from "pages/GeneralSignUpTwo";
import GeneralSignupThree from "pages/GeneralSignUpThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { 
        path: "/", 
        element: <Home /> 
    },
    { 
        path: "*", 
        element: <NotFound /> 
    },
    { 
        path: "register", 
        element: <Register /> 
    },
    { 
      path: "registerone", 
      element: <RegisterOne /> 
    },
    { 
        path: "registertwo", 
        element: <RegisterTwo /> 
    },
    { 
        path: "registerthree", 
        element: <RegisterThree /> 
    },
    { 
        path: "tvone", 
        element: <TVOne /> 
    },
    { 
        path: "tvtwo", 
        element: <TVTwo /> 
    },
    { 
        path: "tvthree", 
        element: <TVThree /> 
    },
    { 
        path: "login", 
        element: <Login /> 
    },
    { 
        path: "registerfive", 
        element: <RegisterFive /> 
    },
    { 
        path: "profilesetupfour", 
        element: <ProfileSetupFour /> 
    },
    { 
        path: "profilesetuptwo", 
        element: <ProfileSetupTwo /> 
    },
    { 
        path: "profilesetupone", 
        element: <ProfileSetupOne /> 
    },
    { 
        path: "hometwo", 
        element: <HomeTwo /> 
    },
    { 
        path: "homeone", 
        element: <HomeOne /> 
    },
    { 
        path: "academicprogram", 
        element: <AcademicProgram /> 
    },
    { 
        path: "academicprogramfour", 
        element: <AcademicProgramFour /> 
    },
    { 
        path: "academicprogramthree", 
        element: <AcademicProgramThree /> 
    },
    { 
        path: "academicprogramtwo", 
        element: <AcademicProgramTwo /> 
    },
    { 
        path: "academicprogramfive", 
        element: <AcademicProgramFive /> 
    },
    { 
        path: "academicprogramsix", 
        element: <AcademicProgramSix /> 
    },
    { 
        path: "academicprogrameight", 
        element: <AcademicProgramEight /> 
    },
    { 
        path: "academicprogramnine", 
        element: <AcademicProgramNine /> 
    },
    { 
        path: "academicprogramseven", 
        element: <AcademicProgramSeven /> 
    },
    { 
        path: "academicprogramten", 
        element: <AcademicProgramTen /> 
    },
    { 
        path: "homethree", 
        element: <HomeThree /> 
    },
    { 
        path: "homefour", 
        element: <HomeFour /> 
    },
    { 
        path: "homefive", 
        element: <HomeFive /> 
    },
    { 
        path: "homesix", 
        element: <HomeSix /> 
    },
    { 
        path: "liveevents", 
        element: <LiveEvents /> 
    },
    { 
        path: "generalsignupone", 
        element: <GeneralSignupOne /> 
    },
    { 
        path: "generalsignuptwo", 
        element: <GeneralSignupTwo /> 
    },
    { 
        path: "generalsignupthree", 
        element: <GeneralSignupThree /> 
    },
  ]);
  return element;
};

export default ProjectRoutes;
