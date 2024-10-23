import React from "react";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { Img } from "../../components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoleSelection = ({ onNext, formik }) => {
  // const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white bg-opacity-10">
      <h2
        className="text-center text-2xl mb-4 text-white"
        style={{ color: "white" }}
      >
        Create Account
      </h2>

      <Select
        label={<span className="text-white font-normal">Select Role</span>}
        name="role"
        options={[
          { value: "student", label: "Student" },
          { value: "lecturer", label: "Lecturer" },
        ]}
        value={formik?.values?.role || ""}
        onChange={formik.handleChange}
        className="mb-4"
      />

      <div className="flex flex-col gap-2">
        <Button
          onClick={onNext}
          className="bg-foundation-primary_color-p400 hover:bg-foundation-primary_color-p300 text-white rounded-lg w-full py-2"
          style={{ color: "white" }}
        >
          Continue
        </Button>

        <Link to="/login">
          <Button
            className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg w-full py-2"
            rightIcon={
              <Img
                src="images/img_chevron-right-black.svg"
                alt="Arrow Right"
                className="h-[12px] w-[12px]"
              />
            }
            // onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

// PropTypes validation for better type safety
RoleSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default RoleSelection;
