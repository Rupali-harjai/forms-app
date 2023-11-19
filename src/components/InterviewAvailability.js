import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInterviewAvailability } from "../redux/actions/formActions";

const InterviewAvailability = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setInterviewAvailability(formData));
  };

  return (
    <div className="formdata-container">
      <form>
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Example - userid@gmail.com"
          onChange={handleInputChange}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Search or enter your location "
          onChange={handleInputChange}
        />

        <label>Interview Date</label>
        <input
          type="date"
          name="interviewDate"
          value={formData.interviewDate}
          placeholder="DD/MM/YYY"
          onChange={handleInputChange}
          required
        />

        <label>Interview Time</label>
        <input
          type="time"
          name="interviewTime"
          value={formData.interviewTime}
          placeholder="12:00"
          onChange={handleInputChange}
          required
        />

        <label>Time Zone</label>
        <select
          name="timeZone"
          value={formData.timeZone}
          onChange={handleInputChange}
          required
        >
          <option disabled value="">
            Search or Select a time zone from below
          </option>

          <option value="EST">EST</option>
          <option value="IST">IST</option>
          <option value="PST">PST</option>
        </select>

        <label>Interview Medium</label>
        <select
          name="interviewMedium"
          value={formData.interviewMedium}
          onChange={handleInputChange}
          required
        >
          <option disabled value="">
            Search or Select medium of Interview from below
          </option>
          <option value="In-person">In-person</option>
          <option value="Phone">Phone</option>
          <option value="Video">Video</option>
        </select>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InterviewAvailability;
