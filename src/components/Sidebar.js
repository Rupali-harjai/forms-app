import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const steps = [
    {
      name: "Basic Details",
      slug: "basic-details",
      content:
        "Collect information from Candidates on their education, work experience, contact no,etc",
    },
    {
      name: "Document Collection",
      slug: "document-collection",
      content:
        "Save time and efforts: Explore this template to find a set of questions required for document collection ",
    },
    {
      name: "Statement of Purpose",
      slug: "statement-of-purpose",
      content:
        "Start creating a new form with the wide options of fields available",
    },
    {
      name: "Interview Availability",
      slug: "interview-availability",
      content:
        "Start creating a new form with the wide options of fields available",
    },
  ];

  const [selectedStep, setSelectedStep] = useState(null);

  const location = useLocation();

  const currentStep = location.pathname.split("/")[1];

  if (currentStep !== selectedStep) {
    setSelectedStep(currentStep);
  }
  return (
    <div className="left-side">
      <ul>
        {steps.map((step) => (
          <li
            key={step.slug}
            className={step.slug === selectedStep ? "active" : ""}
          >
            <div className="box-section"></div>
            <div className="content-section">
              <Link to={`/${step.slug}`}>{step.name}</Link>
              {step.content && <p>{step.content}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
