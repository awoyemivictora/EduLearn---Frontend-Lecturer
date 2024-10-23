import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from "components/Input";
import Button from "components/Button";
import bgImage from '../../assets/images/img_register.png';
import { Img } from "components";
// import { Heading } from "components";
import { useNavigate } from "react-router-dom";



const ForgotPassword = () => {
    const navigate = useNavigate(); 
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSbumit: values => {
            // Handle form submission
            console.log('Password reset request submitted', values);
        },
    });

    const inputRef = useRef(null); // To set the input field focused on page loads


    useEffect(() => {
        // Focus the input element
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])


    return (

        <>
      <Helmet>
        <title>EduLearn</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      {/* Background Image Container */}
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#18614cE5' }}></div>

        {/* Form Container */}
        <div className="relative bg-[#488779] bg-opacity-35 p-8 rounded-lg max-w-md w-full backdrop-filter backdrop-blur-md">
          <div className="flex flex-col items-center gap-2">
            <Img
              src="images/img_logo.png"
              alt="Logo"
              className="h-20 w-50 object-contain"
            />
            <h2 className="text-center text-2xl mb-3 mt-3 text-white !important" style={{ color: 'white' }}>Forgot Password</h2>
            {/* <Heading as="h2" className="text-white text-center py-1 font-normal" style={{ color: 'white' }}>
            Reset your password
            </Heading> */}
          </div>


          <form onSubmit={formik.handleSubmit}>
                      <Input 
                            ref={inputRef}
                            // label={<span className="text-white font-normal" style={{ color: 'white' }}>Email, Username or Phone Number</span>}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <div className="text-red-600">{formik.errors.email}</div>
                        )}

<div className="flex flex-col gap-2">
              <Button
                type="submit"
                className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white !important rounded-lg w-full py-2 mt-2"
                style={{ color: 'white' }}
              >
                Reset Password
              </Button>

              <Button
                className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
                rightIcon={<Img src="images/img_chevron-right-black.svg" alt="Arrow Right" className="h-[12px] w-[12px]" />}
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </div>
                        {/* <div className="mt-4">
                            <Button
                                type="submit"
                                variant="fill"
                                color="foundation__primary_color_p300"
                                size="xl"
                                className="w-full"
                            >
                                Reset Password
                            </Button>
                        </div> */}
                    </form>
        </div>
      </div>
    </>
    );
};



export default ForgotPassword;



