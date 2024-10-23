import React, { useState } from "react";
import { Helmet } from "react-helmet";
import RoleSelection from "../../components/RoleSelection";
import PersonalInfo from "../../components/PersonalInformation";
import AddressDetails from "../../components/AddressDetails";
import UniversityInfoDetails from "../../components/UniversityInfoDetails";
import SecurityDetails from "../../components/SecurityDetails";
import SuccessScreen from "../../components/SuccessScreen";
import NinConfirmation from "../../components/NinConfirmation";
import NinInput from "../../components/NinInput";
import SecondaryInfoDetails from "../../components/SecondaryInfoDetails";
import MedicalInfoDetails from "../../components/MedicalInfoDetails";
import PictureUpload from "../../components/PictureUpload";
import SuccessProfile from "../../components/SuccessProfile";
import { useFormik } from "formik";
import * as Yup from "yup";
import bgImage from "../../assets/images/img_register.png";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ninConfirmed, setNinConfirmed] = useState(false);

  const roleData = {
    student: "student",
    lecturer: "lecturer",
  };

  const formik = useFormik({
    initialValues: {
      role: "",
      nin: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      date_of_birth: "",
      email: "",
      phone_number: "",
      username: "",
      address: "",
      country: "",
      state: "",
      university_name: "", // No conditions for now
      faculty: "", // No conditions for now
      department: "", // No conditions for now
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Role is required"),
      nin: Yup.number().required("NIN is required and must be number"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      middle_name: Yup.string(),
      date_of_birth: Yup.date().required("Date of Birth is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_number: Yup.number().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      university_name: Yup.string().required("University name is required"), // Always required for testing
      faculty: Yup.string().required("Faculty is required"), // Always required for testing
      department: Yup.string().required("Department is required"), // Always required for testing
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password should be at least 6 characters"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      secondary_school: Yup.string().required(
        "Secondary schoool name is required",
      ),
      ssce_exam_type: Yup.string().required("SSCE exam type is required"),
      exam_year: Yup.string().required("Exam year is required"),
      jamb_score: Yup.number().required("Jamb score is required"),
      blood_group: Yup.string().required("Blood group is required"),
      genotype: Yup.string().required("Genotype is required"),
      sex: Yup.string().required("Sex is required"),
    }),

    onSubmit: async (values) => {
      const apiUrl =
        values.role === "student"
          ? "http://localhost:8000/students/signup"
          : "http://localhost:8000/lecturers/signup";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert("Registration successful!");
          setCurrentStep(6); // Move to success screen after successful submission
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
          alert("Registration failed! Please check your inputs and try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  const handleNext = async () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      // Validate NIN input
      await formik.validateForm();
      if (!formik.errors.nin) {
        setCurrentStep(3); // Move to NinConfirmation step
      } else {
        formik.setTouched({ nin: true });
        alert("Please provide a valid NIN before proceeding.");
      }

      return;
    }

    if (currentStep === 3) {
      setCurrentStep(4);
      return;
    }

    if (currentStep === 4) {
      await formik.validateForm();
      if (
        !formik.errors.country &&
        !formik.errors.state &&
        !formik.errors.address
      ) {
        setCurrentStep(5);
      } else {
        formik.setTouched({
          country: true,
          state: true,
          address: true,
        });
        alert("Please correct the errors before proceeding.");
      }
      return;
    }

    if (currentStep === 5) {
      await formik.validateForm();
      console.log("Formik Errors:", formik.errors);

      if (
        !formik.errors.country &&
        !formik.errors.state &&
        !formik.errors.address
      ) {
        formik.handleSubmit();
        setCurrentStep(6); // Move to SuccessScreen
      } else {
        formik.setTouched({
          email: true,
          username: true,
          password: true,
          confirm_password: true,
        });
        alert("Please correct the errors before proceeding.");
      }
      return;
    }

    if (currentStep === 6) {
      setCurrentStep(7); // Move to RoleSpecificDetails after SuccessScreen
    }

    if (currentStep === 7) {
      await formik.validateForm();
      if (
        !formik.errors.university_name &&
        !formik.errors.faculty &&
        !formik.errors.department
      ) {
        formik.handleSubmit();
        setCurrentStep(8); // Move to Secondary School Details
      } else {
        formik.setTouched({
          university_name: true,
          faculty: true,
          department: true,
        });
        alert("Please correct the errors before proceeding.");
      }
      return;
    }

    if (currentStep === 8) {
      await formik.validateForm();
      if (
        !formik.errors.university_name &&
        !formik.errors.faculty &&
        !formik.errors.department
      ) {
        formik.handleSubmit();
        setCurrentStep(9); // Move to Secondary School Details
      } else {
        formik.setTouched({
          secondary_school: true,
          ssce_exam_type: true,
          exam_year: true,
          jamb_score: true,
        });
        alert("Please correct the errors before proceeding.");
      }
      return;
    }

    if (currentStep === 9) {
      setCurrentStep(10); // Move to Profile Picture Upload
    }

    if (currentStep === 10) {
      setCurrentStep(11); // Move to Successful Profile Setup
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToLogin = () => {
    // Implement navigation to login page
  };

  return (
    <>
      <Helmet>
        <title>Register - EduLearn</title>
      </Helmet>
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#18614cE5" }}
        ></div>
        <div className="relative bg-[#488779] bg-opacity-35 p-8 rounded-lg max-w-md w-full backdrop-filter backdrop-blur-md">
          {currentStep === 1 && (
            <RoleSelection onNext={handleNext} formik={formik} />
          )}
          {currentStep === 2 && (
            <NinInput onNext={handleNext} onBack={handleBack} formik={formik} />
          )}
          {currentStep === 3 && (
            <NinConfirmation onNext={handleNext} formik={formik} />
          )}
          {/* {currentStep === 4 && (
            <PersonalInfo
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )} */}
          {currentStep === 4 && (
            <AddressDetails
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}

          {currentStep === 5 && (
            <SecurityDetails
              // onSubmit={formik.handleSubmit}
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}
          {currentStep === 6 && <SuccessScreen onGoToLogin={handleNext} />}
          {currentStep === 7 && (
            <UniversityInfoDetails
              role={roleData}
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}
          {currentStep === 8 && (
            <SecondaryInfoDetails
              role={roleData}
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}
          {currentStep === 9 && (
            <MedicalInfoDetails
              role={roleData}
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}
          {currentStep === 10 && (
            <PictureUpload
              role={roleData}
              onNext={handleNext}
              onBack={handleBack}
              formik={formik}
            />
          )}
          {currentStep === 11 && <SuccessProfile onGoToLogin={handleNext} />}
        </div>
      </div>
    </>
  );
};

export default Register;
