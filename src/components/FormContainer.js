import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BasicDetails from "./BasicDetails";
import DocumentCollection from "./DocumentCollection";
import StatementOfPurpose from "./StatementOfPurpose";
import InterviewAvailability from "./InterviewAvailability";

const componentsByStep = {
  "basic-details": <BasicDetails />,
  "document-collection": <DocumentCollection />,
  "statement-of-purpose": <StatementOfPurpose />,
  "interview-availability": <InterviewAvailability />,
};

const FormContainer = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(step);

  const handleNext = () => {
    setCurrentStep((prevStep) => getNextStep(prevStep));
    navigate(`/${getNextStep(currentStep)}`);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => getPreviousStep(prevStep));
    navigate(`/${getPreviousStep(currentStep)}`);
  };

  const getNextStep = (currentStep) => {
    const steps = Object.keys(componentsByStep);
    const currentIndex = steps.indexOf(currentStep);
    return steps[currentIndex + 1];
  };

  const getPreviousStep = (currentStep) => {
    const steps = Object.keys(componentsByStep);
    const currentIndex = steps.indexOf(currentStep);
    return steps[currentIndex - 1];
  };

  const currentComponent =
    currentStep === "basic-details" ? (
      <BasicDetails />
    ) : (
      componentsByStep[currentStep]
    );

  return (
    <div className="form-section">
      <div className="form-section-heading">
        <h2>Name of the Enquiry Form</h2>
        <p>One line description of the form</p>

        <h5>Provide the following information to process your application</h5>
      </div>

      {currentComponent}
      <div className="btns">
        {currentStep !== "basic-details" && (
          <button onClick={handleBack}>Back</button>
        )}
        {currentStep !== "interview-availability" && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default FormContainer;
