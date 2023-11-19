import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDocumentCollection } from "../redux/actions/formActions";

const DocumentCollection = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    class10Marksheet: "",
    class12Marksheet: "",
    graduationMarksheet: "",
    postGraduationMarksheet: "",
    resume: "",
    recommendationLetter: "",
    salarySlips: "",
    others: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setDocumentCollection(formData));
  };

  return (
    <div className="formdata-container">
      <form>
        <label>Class 10 Marksheet*</label>
        <input
          type="file"
          name="class10Marksheet"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
          required
        />

        <label>Class 12 Marksheet*</label>
        <input
          type="file"
          name="class12Marksheet"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
          required
        />

        <label>Graduation Marksheet*</label>
        <input
          type="file"
          name="graduationMarksheet"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
          required
        />

        <label>Post Graduation Marksheet</label>
        <input
          type="file"
          name="postGraduationMarksheet"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
        />

        <label>Resume/CV*</label>
        <input
          type="file"
          name="resume"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
          required
        />

        <label>Recommendation Letter</label>
        <input
          type="file"
          name="recommendationLetter"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
        />

        <label>Salary Slips</label>
        <input
          type="file"
          name="salarySlips"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
        />

        <label>Others(if any)</label>
        <input
          type="file"
          name="others"
          placeholder="Attach file upto 5kb"
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DocumentCollection;
