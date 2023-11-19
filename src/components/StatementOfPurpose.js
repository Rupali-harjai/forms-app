import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStatementOfPurpose } from "../redux/actions/formActions";

const StatementOfPurpose = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setStatementOfPurpose(formData));
  };

  return (
    <div className="formdata-container">
      <form>
        <label>
          Q1:Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <textarea
          name="question1"
          value={formData.question1}
          placeholder="Enter a description for the long answer"
          onChange={handleInputChange}
          maxLength={300}
          required
        />
        <div className="word-limit">300 word limit</div>

        <label>
          Q2: Tell me about the last time something significant didn’t go
          according to plan at work. What was your role? What was the outcome?
        </label>
        <textarea
          name="question2"
          value={formData.question2}
          placeholder="Enter a description for the long answer"
          onChange={handleInputChange}
          maxLength={300}
          required
        />
        <div className="word-limit">300 word limit</div>

        <label>
          Q3: What are the three things that are most important to you in a job?
        </label>
        <textarea
          name="question3"
          value={formData.question3}
          placeholder="Enter a description for the long answer"
          onChange={handleInputChange}
          maxLength={300}
          required
        />
        <div className="word-limit">300 word limit</div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StatementOfPurpose;
