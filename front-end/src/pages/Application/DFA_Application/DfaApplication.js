import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./dfaapplication.css";

const DfaApplication = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      set: "",
      operator: "",
      target: "",
    },
    onSubmit: {},
  });

  const handleClick = () => {
    navigate("/dfa_result");
  };

  console.log(formik.values);
  return (
    <div className="dfa__container">
      <div className="dfa__wrapper">
        <p className="dfa__wrapper__text">DFA Application</p>
      </div>
      <form>
        <div className="input__wrapper">
          <div className="input__container">
            <label className="label__text">Input the Set</label>
            <input
              id="set"
              name="set"
              type="text"
              className="dfa__input"
              onChange={formik.handleChange}
              value={formik.values.set}
            />
          </div>
          <div className="input__container">
            <label className="label__text">List of Operators</label>
            <input
              id="set"
              name="set"
              type="text"
              className="dfa__input"
              onChange={formik.handleChange}
              value={formik.values.operator}
            />
          </div>
          <div className="input__container">
            <label className="label__text">
              Input the TargetInput the Target
            </label>
            <input
              id="set"
              name="set"
              type="text"
              className="dfa__input"
              onChange={formik.handleChange}
              value={formik.values.target}
            />
          </div>
        </div>
        <div className="btn__wrapper">
          <button onClick={handleClick} className="input__btn">
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default DfaApplication;
